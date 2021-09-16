import React from "react";

import "../styles/Produtos.modules.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function produtosFetch() {
      setLoading('Carregando');
      const podutosResponse = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const produtosJson = await podutosResponse.json();
      setProdutos([...produtosJson]);
      setLoading(false);
    }
    produtosFetch();
  }, []);

  if(loading) <p>Carregando</p>
  return (
    <div className="gridProdutos">
      {produtos &&
        produtos.map((produto) => (
          <div className="gridItem" key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1>{produto.nome}</h1>
          </div>
        ))}
    </div>
  );
};

export default Produtos;
