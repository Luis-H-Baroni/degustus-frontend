import Comandas from "../components/comandas/Comandas";
import NovaComandaForm from "../components/comandas/NovaComandaForm";
import { useEffect, useState } from "react";

function ComandaPage() {
  //traz todos os itens
  const [loadedPayload, setLoadedPayload] = useState([]);

  async function fetchData() {
    const listaComandas = await fetch("http://localhost:8080/api/comanda");
    const listaComandasJson = await listaComandas.json();
    setLoadedPayload(listaComandasJson);
  }
  useEffect(() => {
    fetchData();
  }, []);

  //abre e fecha o form de novo comanda
  const [openedForm, setOpenedForm] = useState(false);
  function openForm() {
    openedForm ? setOpenedForm(false) : setOpenedForm(true);
  }

  //adiciona novo comanda
  async function addComandaHandler(itemPayload) {
    await fetch("http://localhost:8080/api/comanda", {
      method: "POST",
      body: JSON.stringify(itemPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <Comandas listaComandas={loadedPayload} fetchData={fetchData} />
        </div>
        <div className="col-4">
          <button onClick={openForm} className="btn btn-outline-secondary me-2">
            Nova Comanda
          </button>
          {openedForm && <NovaComandaForm onAddComanda={addComandaHandler} />}
        </div>
      </div>
    </div>
  );
}

export default ComandaPage;
