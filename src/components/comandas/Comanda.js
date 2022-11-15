import TextCard from "../TextCard";
import EditModal from "../EditModal";
import { useState } from "react";

//itens individuais
function Comanda(props) {
  //dados comanda
  const [id, setId] = useState(null);
  const [mesaId, setMesa] = useState("");
  const [funcionarioId, setFuncionario] = useState("");
  const [empresaId, setEmpresa] = useState("");
  const [dataFechamento, setDataFechamento] = useState("");

  //fechamento
  const [isClosed, setIsClosed] = useState(props.dataFechamento);

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //botao deletar
  async function deleteBtnHandler() {
    console.log(props.id);
    await fetch("http://localhost:8080/api/comanda/" + props.id, {
      method: "DELETE",
    });
  }

  //botao editar(abre modal de edicao)
  async function editBtnHandler() {
    handleShow();

    const comanda = await fetch(
      "http://localhost:8080/api/comanda/" + props.id
    );
    const comandaJson = await comanda.json();

    setId(comandaJson["id"]);
    setMesa(comandaJson["mesaId"]);
    setFuncionario(comandaJson["funcionarioId"]);
    setEmpresa(comandaJson["empresaId"]);
    setDataFechamento(comandaJson["dataFechamento"]);

    console.log(props.id);
  }

  //salvar edicao(botao dentro do modal)
  async function saveEditHandler(event) {
    event.preventDefault();
    const comanda = { id, mesaId, funcionarioId, empresaId };
    console.log(comanda);
    await fetch("http://localhost:8080/api/comanda/", {
      method: "PATCH",
      body: JSON.stringify(comanda),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClose();
  }

  async function fecharBtnHandler() {
    console.log(props.id);
    const comandaId = { id: props.id };
    await fetch("http://localhost:8080/api/comanda/", {
      method: "PATCH",
      body: JSON.stringify(comandaId),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsClosed(true);
  }

  return (
    <div className="col">
      <TextCard>
        <div className="card-body">
          <h5 className="card-title">{`Mesa ${props.mesaId}`}</h5>
          <p className="card-text">{`Funcionario ${props.funcionarioId}`}</p>
          <p className="card-text">{`Estabelecimento ${props.empresaId}`}</p>
          {isClosed && <span>{`Fechada em ${props.dataFechamento}`}</span>}
        </div>
      </TextCard>
      <button
        onClick={deleteBtnHandler}
        className="btn btn-outline-secondary m-1"
      >
        D
      </button>
      <button
        onClick={editBtnHandler}
        className="btn btn-outline-secondary m-1"
      >
        E
      </button>
      {!isClosed && (
        <button
          onClick={fecharBtnHandler}
          className="btn btn-outline-secondary m-1"
        >
          Fechar
        </button>
      )}
      <EditModal show={show} onHide={handleClose} onClick={handleClose}>
        <form onSubmit={saveEditHandler}>
          <div className="mb-3">
            <label className="form-label">Mesa</label>
            <input
              className="form-control"
              value={mesaId}
              onChange={(e) => {
                setMesa(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Funcionario</label>
            <input
              className="form-control"
              value={funcionarioId}
              onChange={(e) => {
                setFuncionario(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Valor</label>
            <input
              className="form-control"
              value={empresaId}
              onChange={(e) => {
                setEmpresa(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fechamento</label>
            <input
              className="form-control"
              value={dataFechamento}
              onChange={(e) => {
                setDataFechamento(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-outline-secondary">Salvar</button>
        </form>
      </EditModal>
    </div>
  );
}

export default Comanda;
