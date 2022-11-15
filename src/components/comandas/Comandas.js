import Comanda from "./Comanda";

function Cardapio(props) {
  //conjunto de itens do cardapio
  return (
    <div className="row row-cols-2 g-4">
      {props.listaComandas.map((comanda) => (
        <Comanda
          id={comanda.id}
          valor={comanda.valor}
          dataFechamento={comanda.dataFechamento}
          mesaId={comanda.mesaId}
          funcionarioId={comanda.funcionarioId}
          empresaId={comanda.empresaId}
        />
      ))}
    </div>
  );
}

export default Cardapio;
