import Empresa from "./Empresa";

function Empresas(props) {
  //conjunto de empresas
  return (
    <div className="row row-cols-lg-2 row-cols-sm-1 g-4">
      {props.listaEmpresas.map((empresa) => (
        <Empresa
          fetchData={props.fetchData}
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
