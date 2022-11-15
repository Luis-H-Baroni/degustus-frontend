import TextCard from "../TextCard";
import EditModal from "../EditModal";
import logo from "../../logo192.png";
import { useState } from "react";

//funcionario individuais
function Funcionario(props) {
  //dados funcionario
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //botao deletar
  async function deleteBtnHandler() {
    console.log(props.id);
    await fetch("http://localhost:8080/api/funcionario/" + props.id, {
      method: "DELETE",
    });
  }

  //botao editar(abre modal de edicao)
  async function editBtnHandler() {
    handleShow();

    const funcionario = await fetch(
      "http://localhost:8080/api/funcionario/" + props.id
    );
    const funcionarioJson = await funcionario.json();

    setId(funcionarioJson["id"]);
    setNome(funcionarioJson["nome"]);
    setSobrenome(funcionarioJson["sobrenome"]);
    setUsuario(funcionarioJson["usuario"]);
    setSenha(funcionarioJson["senha"]);

    console.log(props.id);
  }

  //salvar edicao(botao dentro do modal)
  async function saveEditHandler(event) {
    event.preventDefault();
    const funcionario = { id, nome, sobrenome, usuario, senha };
    console.log(funcionario);
    await fetch("http://localhost:8080/api/funcionario/", {
      method: "PATCH",
      body: JSON.stringify(funcionario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClose();
  }

  return (
    <div className="col">
      <TextCard>
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">{props.sobrenome}</p>
          <span className="card-text">{props.usuario}</span>
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
      <EditModal show={show} onHide={handleClose} onClick={handleClose}>
        <form onSubmit={saveEditHandler}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              className="form-control"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sobrenome</label>
            <input
              className="form-control"
              value={sobrenome}
              onChange={(e) => {
                setSobrenome(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              className="form-control"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              className="form-control"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-outline-secondary">Salvar</button>
        </form>
      </EditModal>
    </div>
  );
}

export default Funcionario;
