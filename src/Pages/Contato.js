import React from 'react';
import Head from '../components/Head';
import '../styles/Contato.modules.css';
import "../styles/Geral.modules.css";


const Contato = () => {
  return (
    <div className="gridContato enterAnimation">
      <Head title="Contato" description="Página para contato" />
      <div className="imgContato">
        <img src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Imagem ilustrativa de Contato" />
      </div>
      <div className="conteudoContato">
        <div>
          <h2>Entre em contato.</h2>
          <p>andrermelo1@hotmail.com</p>
          <p>(41) 9 8755-5234</p>
          
          <a href="https://github.com/voteprogramablz" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/64/2111/2111428.png" alt="icone do github" />Me siga no github e veja meus projetos :D</a>
        </div>
      </div>
    </div>
  )
}

export default Contato
