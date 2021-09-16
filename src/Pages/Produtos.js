import React from "react";
import { Link } from "react-router-dom";

import "../styles/Produtos.modules.css";
import "../styles/Geral.modules.css";
import Head from "../components/Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    async function produtosFetch() {
      const podutosResponse = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const produtosJson = await podutosResponse.json();
      setProdutos([...produtosJson]);
    }
    produtosFetch();
  }, []);

  return (
    <div className="gridProdutos enterAnimation">
      <Head title="Produtos" description="Produtos da nossa loja" />
      {produtos &&
        produtos.map(({ id, fotos, nome }) => (
          <div className="gridItem" key={id}>
            <Link to={`/produto/${id}`}>
              <img src={fotos[0].src} alt={fotos[0].titulo} />
            </Link>
            <h1>{nome}</h1>
          </div>
        ))}
    </div>
  );
};

export default Produtos;
