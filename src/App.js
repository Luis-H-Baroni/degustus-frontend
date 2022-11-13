import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />

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
