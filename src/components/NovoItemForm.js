import { useRef } from "react";

function NovoItemForm(props) {
  const nomeInputRef = useRef();
  const descInputRef = useRef();
  const valorInputRef = useRef();
  const catInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const itemPayload = {
      nome: nomeInputRef.current.value,
      descricao: descInputRef.current.value,
      valor: valorInputRef.current.value,
      categoria: catInputRef.current.value,
    };

    console.log(itemPayload);

    props.onAddItem(itemPayload);
  }
  return (
    <form className="mt-2" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          id="nome"
          ref={nomeInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <input
          className="form-control"
          id="descricao"
          ref={descInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Valor</label>
        <input className="form-control" id="valor" ref={valorInputRef} />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoria</label>
        <input className="form-control" id="categoria" ref={catInputRef} />
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">Salvar</button>
      </div>
    </form>
  );
}

export default NovoItemForm;
