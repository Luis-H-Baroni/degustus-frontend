import Cardapio from "../components/Cardapio";
import NovoItemForm from "../components/NovoItemForm";
import { useEffect, useState } from "react";

function CardapioPage() {
  //traz todos os itens
  const [loadedPayload, setLoadedPayload] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const itensCardapio = await fetch("http://localhost:8080/api/item");
      const itensCardapioJson = await itensCardapio.json();
      setLoadedPayload(itensCardapioJson);
    }
    fetchData();
  }, [loadedPayload]);

  //abre e fecha o form de novo item
  const [openedForm, setOpenedForm] = useState(false);
  function openForm() {
    openedForm ? setOpenedForm(false) : setOpenedForm(true);
  }

  //adiciona novo item
  async function addItemHandler(itemPayload) {
    await fetch("http://localhost:8080/api/item", {
      method: "POST",
      body: JSON.stringify(itemPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <Cardapio itensCardapio={loadedPayload} />
        </div>
        <div className="col-4">
          <button onClick={openForm} className="btn btn-outline-secondary me-2">
            Novo Item
          </button>
          {openedForm && <NovoItemForm onAddItem={addItemHandler} />}
        </div>
      </div>
    </div>
  );
}

export default CardapioPage;
