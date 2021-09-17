import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Routes } from "react-router";
import Produtos from "./Pages/Produtos";
import Contato from "./Pages/Contato";

import "./styles/App.modules.css";
import Footer from "./Pages/Footer";
import NotFound from "./components/NotFound";
import Produto from "./Pages/Produto";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav className="navigator">
          <NavLink to="/" end className="button">
            Produtos
          </NavLink>
          <NavLink to="contato" className="button">
            Contato
          </NavLink>
        </nav>
        <Routes>
          <Route path="" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id/*" element={<Produto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
        
      </BrowserRouter>
    </div>
  );
};

export default App;
