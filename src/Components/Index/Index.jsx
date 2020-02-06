import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../util/api'; // Importa componente de serviços de autenticação que conversam com a API

export default function Index(props) {
  return (
    <div>
      <h1>Aquele título top</h1>
      <p>Um textão bonito aqui pra chamar atenção</p>
      <p>Outro texto, mas agora explicando como funciona</p>
    </div>
  );
}
