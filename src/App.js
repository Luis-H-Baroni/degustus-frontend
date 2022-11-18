import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cardapio from "./pages/Cardapio";
import Funcionarios from "./pages/Funcionarios";
import Empresas from "./pages/Empresas";
import Home from "./pages/Home/Home.js";
import Comandas from "./pages/Comanda";
import Ordens from "./pages/Ordem";
import CozinhaDegustus from "./pages/CozinhaDegustus";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/gourmet-cozinha" element={<CozinhaDegustus />} />
      </Routes>
      <Routes>
        <Route path="/ordens" element={<Ordens empresaFilter={null} />} />
      </Routes>
      <Routes>
        <Route path="/comandas" element={<Comandas />} />
      </Routes>
      <Routes>
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
      <Routes>
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
