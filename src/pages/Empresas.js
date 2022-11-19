import Empresas from "../components/empresas/Empresas";
import NovaEmpresaForm from "../components/empresas/NovaEmpresaForm";
import { useEffect, useState } from "react";

function EmpresaPage() {
  //traz todos as empresas
  const [loadedPayload, setLoadedPayload] = useState([]);

  async function fetchData() {
    const listaEmpresas = await fetch("http://localhost:8080/api/empresa");
    const listaEmpresasJson = await listaEmpresas.json();
    setLoadedPayload(listaEmpresasJson);
  }
  useEffect(() => {
    fetchData();
  }, []);

  //abre e fecha o form de novo empresa
  const [openedForm, setOpenedForm] = useState(false);
  function openForm() {
    openedForm ? setOpenedForm(false) : setOpenedForm(true);
  }

  //adiciona novo empresa
  async function addEmpresaHandler(empresaPayload) {
    await fetch("http://localhost:8080/api/empresa", {
      method: "POST",
      body: JSON.stringify(empresaPayload),
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
          <Empresas listaEmpresas={loadedPayload} fetchData={fetchData} />
        </div>
        <div className="col-4">
          <button onClick={openForm} className="btn btn-outline-secondary me-2">
            Nova Empresa
          </button>
          {openedForm && <NovaEmpresaForm onAddEmpresa={addEmpresaHandler} />}
        </div>
      </div>
    </div>
  );
}

export default EmpresaPage;
