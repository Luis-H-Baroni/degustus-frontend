import Card from "../Card";
import EditModal from "../EditModal";
import logo from "../../logo192.png";
import { useState } from "react";

//itens individuais
function ItemCardapio(props) {
  //dados item
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [empresaId, setEmpresa] = useState("");
  const [url, setImageUrl] = useState("");

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //botao deletar
  async function deleteBtnHandler() {
    console.log(props.id);
    await fetch("http://localhost:8080/api/item/" + props.id, {
      method: "DELETE",
    });
    props.fetchData();
  }

  //botao editar(abre modal de edicao)
  async function editBtnHandler() {
    handleShow();

    const item = await fetch("http://localhost:8080/api/item/" + props.id);
    const itemJson = await item.json();
    console.log({ itemJson: itemJson });
    setId(itemJson["id"]);
    setNome(itemJson["nome"]);
    setDescricao(itemJson["descricao"]);
    setValor(itemJson["valor"]);
    setCategoria(itemJson["categoria"]);
    setEmpresa(itemJson["empresaId"]);
    setImageUrl(itemJson["url"]);

    console.log(props.id);
  }

  //salvar edicao(botao dentro do modal)
  async function saveEditHandler(event) {
    event.preventDefault();
    const item = { id, nome, descricao, valor, categoria, empresaId, url };
    console.log(item);
    await fetch("http://localhost:8080/api/item/", {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClose();
    props.fetchData();
  }

  function selectBtnHandler() {
    props.setSelectId(props.id);
    props.handleCardapioClose();
  }

  return (
    <div className="col">
      <Card>
        <img
          src={props.url}
          className="card-img-top max-width: 50%"
          alt=""
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">{props.descricao}</p>
          <span className="card-text">R${props.valor}</span>
        </div>
      </Card>
      {!props.readOnly && (
        <button
          onClick={deleteBtnHandler}
          className="btn btn-outline-secondary m-1"
        >
          D
        </button>
      )}
      {!props.readOnly && (
        <button
          onClick={editBtnHandler}
          className="btn btn-outline-secondary m-1"
        >
          E
        </button>
      )}
      {props.readOnly && (
        <button
          onClick={selectBtnHandler}
          className="btn btn-outline-secondary m-1"
        >
          Selecionar
        </button>
      )}
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
            <label className="form-label">Descricao</label>
            <input
              className="form-control"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Valor</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={valor}
              onChange={(e) => {
                setValor(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <input
              className="form-control"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagem(URL)</label>
            <input
              className="form-control"
              value={url}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Empresa</label>
            <input
              className="form-control"
              value={empresaId}
              onChange={(e) => {
                setEmpresa(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-outline-secondary">Salvar</button>
        </form>
      </EditModal>
    </div>
  );
}

export default ItemCardapio;
