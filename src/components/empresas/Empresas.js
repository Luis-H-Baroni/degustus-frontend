import Empresa from "./Empresa";

function Empresas(props) {
  //conjunto de itens do cardapio
  return (
    <div className="row row-cols-2 g-4">
      {props.listaEmpresas.map((empresa) => (
        <Empresa
          id={empresa.id}
          nomeFantasia={empresa.nomeFantasia}
          razaoSocial={empresa.razaoSocial}
          cnpj={empresa.cnpj}
        />
      ))}
    </div>
  );
}

export default Empresas;
