import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';

function App() {
  // Função para criar uma aposta
  async function criarAposta() {
    const data = {
      body: {
        titulo: 'Quem será o próximo demitido?',
        opcoes: ['Kauê', 'Lucas', 'Vander', 'Kelvin', 'Japa', 'Otavio'],
      },
    };

    try {
      const response = await API.post('ApostasAPI', '/apostas', data);
      console.log('Resposta da API:', response);
    } catch (err) {
      console.error('Erro ao criar aposta:', err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Botão para criar aposta */}
        <button onClick={criarAposta} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Criar Aposta
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
