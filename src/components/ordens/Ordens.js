function Ordens(props) {
  //conjunto de itens do cardapio
  console.log(props);
  return (
    <div className="row row-cols-auto g-4 justify-content-start">
      {props.listaOrdens.map((comanda) => {
        <p>teste</p>;
        comanda.ordens.map((ordem) => {
          <p>teste2</p>;
        });
      })}
    </div>
  );
}

export default Ordens;
