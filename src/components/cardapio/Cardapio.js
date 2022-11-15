import ItemCardapio from "./ItemCardapio";

function Cardapio(props) {
  //conjunto de itens do cardapio
  return (
    <div className="row row-cols-auto g-4">
      {props.itensCardapio.map((item) => (
        <ItemCardapio
          id={item.id}
          nome={item.nome}
          valor={item.valor}
          descricao={item.descricao}
        />
      ))}
    </div>
  );
}

export default Cardapio;
