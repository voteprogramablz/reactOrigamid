import React from "react";
import { useParams } from "react-router";
import EachProduct from "../components/EachProduct";
import Head from "../components/Head";



const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState();
  const [loading, setLoading] = React.useState('');

  React.useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);
      const produtosResponse = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );

      const produtosJson = await produtosResponse.json();
      setProduto({ ...produtosJson });
      setLoading(false);
    }
    fetchProdutos();
  }, [params]);

  if(loading) 
    return <p>Carregando...</p>
    else
  return (
    <div>
      {produto && (
        <>
          <Head title={produto.nome} description="Página para contato" />
          <EachProduct
            id={produto.id}
            fotos={produto.fotos}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
          />
        </>
      )}
    </div>
  );
};

export default Produto;
