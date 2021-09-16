import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Routes } from "react-router";
import Produtos from "./Pages/Produtos";
import Contato from "./Pages/Contato";

import "./styles/App.modules.css";
import Footer from "./Pages/Footer";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <nav className="navigator">
          <NavLink to="/" end className="button">
            Produtos
          </NavLink>
          <NavLink to="contato" className="button">
            Contato
          </NavLink>
        </nav>
        <Routes>
          <Route path="" element={<Produtos />}></Route>
          <Route path="contato" element={<Contato />}></Route>
        </Routes>
      <Footer />
        
      </BrowserRouter>
    </div>
  );
};

export default App;
