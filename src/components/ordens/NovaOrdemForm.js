import { useRef, useState, useEffect } from "react";
import Cardapio from "../cardapio/Cardapio";
import CardapioModal from "../CardapioModal";

//form para cadastrar novos itens
function NovaOrdemForm(props) {
  const [selectId, setSelectId] = useState(null);

  //modal
  const [show, setShow] = useState(false);
  const handleCardapioClose = () => setShow(false);
  const handleCardapioShow = () => setShow(true);

  //traz todos os itens
  const [loadedPayload, setLoadedPayload] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const itensCardapio = await fetch("http://localhost:8080/api/item");
      const itensCardapioJson = await itensCardapio.json();
      setLoadedPayload(itensCardapioJson);
    }
    fetchData();
  }, []);

  const itemInputRef = useRef();
  const quantidadeInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    console.log(props.id);
    const comandaId = props.id;
    const ordemPayload = {
      comandaId: comandaId,
      itemId: itemInputRef.current.value,
      quantidade: quantidadeInputRef.current.value,
    };

    console.log(ordemPayload);
    console.log(selectId);

    await fetch("http://localhost:8080/api/ordem", {
      method: "POST",
      body: JSON.stringify(ordemPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    props.handleCloseOrdem();
    props.fetchData();
  }

  function openCardapioModal() {
    handleCardapioShow();
    console.log(props.id);
  }

  return (
    <div>
      <CardapioModal
        show={show}
        onHide={handleCardapioClose}
        onClick={handleCardapioClose}
      >
        <Cardapio
          readOnly={true}
          itensCardapio={loadedPayload}
          setSelectId={setSelectId}
          handleCardapioClose={handleCardapioClose}
        />
      </CardapioModal>

      <form className="mt-2" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-5 ms-3 mt-3 mb-5">
            <label className="form-label">Numero do Item</label>
            <input
              className="form-control"
              id="itemId"
              ref={itemInputRef}
              value={selectId}
            />
          </div>
          <div className="col mb-2">
            <button
              type="button"
              className="btn btn-outline-secondary mt-5"
              onClick={openCardapioModal}
            >
              Buscar
            </button>
          </div>
          <div className="col-3 m-3">
            <label className="form-label">Quantidade</label>
            <input
              className="form-control"
              id="quantidade"
              ref={quantidadeInputRef}
            />
          </div>
        </div>

        <div>
          <button className="btn btn-outline-secondary me-2">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default NovaOrdemForm;
