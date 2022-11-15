import Funcionario from "./Funcionario";

function Funcionarios(props) {
  //conjunto de funcionarios
  return (
    <div className="row row-cols-2 g-4">
      {props.listaFuncionarios.map((funcionario) => (
        <Funcionario
          id={funcionario.id}
          nome={funcionario.nome}
          sobrenome={funcionario.sobrenome}
          usuario={funcionario.usuario}
          senha={funcionario.senha}
        />
      ))}
    </div>
  );
}

export default Funcionarios;
