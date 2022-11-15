import { useRef } from "react";

//form para cadastrar novos itens
function NovoItemForm(props) {
  const mesaInputRef = useRef();
  const funcionarioInputRef = useRef();
  const empresaInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const comandaPayload = {
      mesaId: mesaInputRef.current.value,
      funcionarioId: funcionarioInputRef.current.value,
      valor: 0,
      empresaId: empresaInputRef.current.value,
    };

    console.log(comandaPayload);

    props.onAddComanda(comandaPayload);
  }
  return (
    <form className="mt-2" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Mesa</label>
        <input
          className="form-control"
          id="mesa"
          ref={mesaInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Funcionario</label>
        <input
          className="form-control"
          id="funcionario"
          ref={funcionarioInputRef}
          value={props.value}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Empresa</label>
        <input className="form-control" id="empresa" ref={empresaInputRef} />
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">Salvar</button>
      </div>
    </form>
  );
}

export default NovoItemForm;
