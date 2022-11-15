import { useRef } from "react";

//form para cadastrar novos itens
function NovoFuncionarioForm(props) {
  const nomeInputRef = useRef();
  const sobrenomeInputRef = useRef();
  const usuarioInputRef = useRef();
  const senhaInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const funcionarioPayload = {
      nome: nomeInputRef.current.value,
      sobrenome: sobrenomeInputRef.current.value,
      usuario: usuarioInputRef.current.value,
      senha: senhaInputRef.current.value,
    };

    console.log(funcionarioPayload);

    props.onAddFuncionario(funcionarioPayload);
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
        <label className="form-label">Sobrenome</label>
        <input
          className="form-control"
          id="sobrenome"
          ref={sobrenomeInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input className="form-control" id="usuario" ref={usuarioInputRef} />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input className="form-control" id="senha" ref={senhaInputRef} />
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">Salvar</button>
      </div>
    </form>
  );
}

export default NovoFuncionarioForm;
