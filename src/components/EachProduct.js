import React from "react";
import "../styles/EachProduct.modules.css";

const EachProduct = ({ id, fotos, nome, preco, descricao }) => {
  return (
    <div key={id} className="gridProdutos">
      <div className="gridItem" >
        {fotos.map(({ titulo, src }) => (
          <img key={titulo} src={src} alt={titulo} />
        ))}
      </div>
      <div className="conteudoProduto">
        <h2>{nome}</h2>
        <p className="__preco">{(+preco).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>
        <p className="__descricao">{descricao}</p>
      </div>
    </div>
  );
};

export default EachProduct;
