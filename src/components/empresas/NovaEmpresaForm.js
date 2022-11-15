import { useRef } from "react";

//form para cadastrar novos itens
function NovaEmpresaForm(props) {
  const nomeFantasiaInputRef = useRef();
  const razaoSocialInputRef = useRef();
  const cnpjInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const empresaPayload = {
      nomeFantasia: nomeFantasiaInputRef.current.value,
      razaoSocial: razaoSocialInputRef.current.value,
      cnpj: cnpjInputRef.current.value,
    };

    console.log(empresaPayload);

    props.onAddEmpresa(empresaPayload);
  }
  return (
    <form className="mt-2" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Nome Fantasia</label>
        <input
          className="form-control"
          id="nomeFantasia"
          ref={nomeFantasiaInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Razao Social</label>
        <input
          className="form-control"
          id="razaoSocial"
          ref={razaoSocialInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">CNPJ</label>
        <input className="form-control" id="cnpj" ref={cnpjInputRef} />
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">Salvar</button>
      </div>
    </form>
  );
}

export default NovaEmpresaForm;
