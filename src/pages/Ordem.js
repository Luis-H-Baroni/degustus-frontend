import TextCard from "../components/TextCard";
import { useEffect, useState } from "react";
import Ordem from "../components/ordens/Ordem";

function OrdemPage(props) {
  const [empresaFilter] = useState(props.empresaFilter);
  const [loadedItem, setLoadedItem] = useState("");
  //traz todos os itens
  const [loadedPayload, setLoadedPayload] = useState([]);
  async function fetchData() {
    const listaComandas = await fetch("http://localhost:8080/api/comanda");
    const listaComandasJson = await listaComandas.json();

    console.log({ empresafilter: empresaFilter });
    console.log({ listaantes: listaComandasJson });

    let listaComandasFiltrada;
    if (empresaFilter) {
      console.log("entroufilter");
      listaComandasFiltrada = listaComandasJson.filter((comanda) => {
        console.log({ empresaid: comanda.empresaId });
        if (comanda.empresaId === empresaFilter) return { comanda };
        console.log({ comanda: comanda });
      });
    } else {
      listaComandasFiltrada = listaComandasJson;
    }
    console.log({ listadepois: listaComandasFiltrada });

    let listaOrdensComandas = await Promise.all(
      listaComandasFiltrada.map(async (comanda) => {
        let ordensComandas = {
          comandaId: comanda.id,
          empresaId: comanda.empresaId,
          mesa: comanda.mesaId,
          ordens: [],
        };
        const response = await fetch(
          `http://localhost:8080/api/comanda/${comanda.id}/ordem`
        );
        const responseJson = await response.json();

        const ordensCompletas = await Promise.all(
          responseJson.map(async (ordem) => {
            const item = await fetch(
              "http://localhost:8080/api/item/" + ordem.itemId
            );
            const itemJson = await item.json();
            return {
              id: ordem.id,
              itemId: ordem.itemId,
              comandaId: ordem.comandaId,
              quantidade: ordem.quantidade,
              nome: itemJson.nome,
            };
          })
        );

        console.log(responseJson);

        ordensComandas.ordens = ordensCompletas;
        return ordensComandas;
      })
    );
    console.log({ lisat: listaOrdensComandas });

    console.log(listaOrdensComandas);

    setLoadedPayload(listaOrdensComandas);
    console.log(loadedPayload);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchItem(itemId) {
    const response = await fetch("http://localhost:8080/api/item/" + itemId);
    const responseJson = await response.json();
    console.log(responseJson.nome);
    return responseJson.nome;
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="row row-cols-5 g-4">
            {loadedPayload.map((comanda, index, array) => {
              if (array[index].ordens.length && comanda.empresaId)
                return (
                  <div>
                    <TextCard>
                      <div className="card-body">
                        <h5 className="card-title">{`Mesa ${comanda.mesa}`}</h5>
                        <p className="card-text">{`Comanda ${comanda.comandaId}`}</p>
                      </div>
                    </TextCard>

                    {comanda.ordens.map((ordem) => {
                      return (
                        <Ordem
                          fetchData={fetchData}
                          itemId={ordem.id}
                          nome={ordem.nome}
                          quantidade={ordem.quantidade}
                        ></Ordem>
                      );
                    })}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdemPage;
