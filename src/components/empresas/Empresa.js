import HorizontalCard from "../HorizontalCard";
import EditModal from "../EditModal";
import logo from "../../logo192.png";
import { useState } from "react";

//empresas individuais
function Empresa(props) {
  //dados empresa
  const [id, setId] = useState(null);
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //botao deletar
  async function deleteBtnHandler() {
    console.log(props.id);
    await fetch("http://localhost:8080/api/empresa/" + props.id, {
      method: "DELETE",
    });
    props.fetchData();
  }

  //botao editar(abre modal de edicao)
  async function editBtnHandler() {
    handleShow();

    const empresa = await fetch(
      "http://localhost:8080/api/empresa/" + props.id
    );
    const empresaJson = await empresa.json();

    setId(empresaJson["id"]);
    setNomeFantasia(empresaJson["nomeFantasia"]);
    setRazaoSocial(empresaJson["razaoSocial"]);
    setCnpj(empresaJson["cnpj"]);

    console.log(props.id);
  }

  //salvar edicao(botao dentro do modal)
  async function saveEditHandler(event) {
    event.preventDefault();
    const empresa = { id, nomeFantasia, razaoSocial, cnpj };
    console.log(empresa);
    await fetch("http://localhost:8080/api/empresa/", {
      method: "PATCH",
      body: JSON.stringify(empresa),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClose();
    props.fetchData();
  }

  return (
    <div className="col">
      <HorizontalCard logo={logo}>
        <div className="card-body">
          <h5 className="card-title">{`${props.id}. ${props.nomeFantasia}`}</h5>
          <p className="card-text">{props.razaoSocial}</p>
          <span className="card-text">{props.cnpj}</span>
        </div>
      </HorizontalCard>
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
      <EditModal show={show} onHide={handleClose} onClick={handleClose}>
        <form onSubmit={saveEditHandler}>
          <div className="mb-3">
            <label className="form-label">Nome Fantasia</label>
            <input
              className="form-control"
              value={nomeFantasia}
              onChange={(e) => {
                setNomeFantasia(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Razao Social</label>
            <input
              className="form-control"
              value={razaoSocial}
              onChange={(e) => {
                setRazaoSocial(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">CNPJ</label>
            <input
              className="form-control"
              value={cnpj}
              onChange={(e) => {
                setCnpj(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-outline-secondary">Salvar</button>
        </form>
      </EditModal>
    </div>
  );
}

export default Empresa;
