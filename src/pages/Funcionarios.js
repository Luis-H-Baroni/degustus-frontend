import Funcionarios from "../components/funcionarios/Funcionarios";
import NovoFuncionarioForm from "../components/funcionarios/NovoFuncionarioForm";
import { useEffect, useState } from "react";

function FuncionariosPage() {
  //traz todos os funcionarios
  const [loadedPayload, setLoadedPayload] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const listaFuncionarios = await fetch(
        "http://localhost:8080/api/funcionario"
      );
      const listaFuncionariosJson = await listaFuncionarios.json();
      setLoadedPayload(listaFuncionariosJson);
    }
    fetchData();
  }, [loadedPayload]);

  //abre e fecha o form de novo funcionario
  const [openedForm, setOpenedForm] = useState(false);
  function openForm() {
    openedForm ? setOpenedForm(false) : setOpenedForm(true);
  }

  //adiciona novo funcionario
  async function addFuncionarioHandler(funcionarioPayload) {
    await fetch("http://localhost:8080/api/funcionario", {
      method: "POST",
      body: JSON.stringify(funcionarioPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <Funcionarios listaFuncionarios={loadedPayload} />
        </div>
        <div className="col-4">
          <button onClick={openForm} className="btn btn-outline-secondary me-2">
            Novo Funcionario
          </button>
          {openedForm && (
            <NovoFuncionarioForm onAddFuncionario={addFuncionarioHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FuncionariosPage;
