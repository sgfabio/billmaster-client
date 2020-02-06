import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../util/api'; // Importa componente de serviços de autenticação que conversam com a API

export default function Index(props) {
  return (
    <div>
      <h1>A maneira mais fácil de dividir as contas da galera!</h1>
      <p className="text"> Com o <strong>BANANA</strong><em>SPLIT</em> você pode criar diferentes grupos, 
          com diferentes pessoas e dividir as contas de forma simples, gratuita e livre de downloads.</p><br/>
      <p  className="text"><strong>Para começar a aproveitar é fácil:</strong><br/>
        - Crie uma conta em nosso menu superior;<br/>
        - Crie um novo grupo e insira os participantes;<br/>
        - Você sempre poderá adicionar novas pessoas;<br/>
        - Como administrador, você deve adicionar as contas;<br/>
        - Compartilhe o link do nosso relatório com seus amigos;<br/>
        - Aproveite o tempo que sobrou para se divertir com eles.<br/>
      </p>
    </div>
  );
}
