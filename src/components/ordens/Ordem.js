import TextCard from "../TextCard";

//itens individuais
function Ordem(props) {
  //botao deletar
  async function deleteBtnHandler() {
    console.log(props.itemId);
    await fetch("http://localhost:8080/api/ordem/" + props.itemId, {
      method: "DELETE",
    });
    props.fetchData();
  }

  return (
    <div className="col mb-2">
      <TextCard>
        <div className="card-body">
          <h6 className="card-title">{`Ordem ${props.id}`}</h6>
          <h5 className="card-text">{props.nome}</h5>
          <span className="card-text">{`Quantidade: ${props.quantidade}`}</span>
        </div>
      </TextCard>

      <button
        onClick={deleteBtnHandler}
        className="btn btn-outline-secondary m-1"
      >
        D
      </button>
    </div>
  );
}

export default Ordem;
