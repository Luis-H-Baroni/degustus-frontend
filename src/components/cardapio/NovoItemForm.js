import React from "react";
import { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

//form para cadastrar novos itens
function NovoItemForm(props) {
  const nomeInputRef = useRef();
  const descInputRef = useRef();
  const valorInputRef = useRef();
  const catInputRef = useRef();
  const empInputRef = useRef();
  const urlInputRef = useRef();
  const [empresa, setEmpresa] = useState([]);

  useEffect(() => {
    console.log("aqui");
    getEmpresa();
  }, []);

  async function getEmpresa() {
    const empresasSalvas = await fetch("http://localhost:8080/api/empresa");
    setEmpresa(await empresasSalvas.json());
  }

  function submitHandler(event) {
    event.preventDefault();

    const itemPayload = {
      nome: nomeInputRef.current.value,
      descricao: descInputRef.current.value,
      valor: valorInputRef.current.value,
      categoria: catInputRef.current.value,
      empresaId: empInputRef.current.value,
      url: urlInputRef.current.value,
    };

    console.log(itemPayload);

    props.onAddItem(itemPayload);
  }
  return (
    <form className="mt-2" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          className="form-control"
          id="nome"
          ref={nomeInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <input
          className="form-control"
          id="descricao"
          ref={descInputRef}
          value={props.value}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Valor</label>
        <input
          className="form-control"
          id="valor"
          type="number"
          min="0"
          ref={valorInputRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoria</label>
        <input className="form-control" id="categoria" ref={catInputRef} />
      </div>
      <div className="mb-3">
        <label className="form-label">Imagem(URL)</label>
        <input className="form-control" id="url" ref={urlInputRef} />
      </div>
      <div className="mb-3">
        <Form.Select>
          <option>Selecione a empresa</option>
          {empresa.map((emp) => {
            return (
              <option ref={empInputRef} value={emp.id}>
                {emp.nomeFantasia}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div>
        <button className="btn btn-outline-secondary me-2">Salvar</button>
      </div>
    </form>
  );
}

export default NovoItemForm;
