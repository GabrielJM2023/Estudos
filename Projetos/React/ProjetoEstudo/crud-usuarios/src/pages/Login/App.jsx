import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null); // Para armazenar erros

  const navigate = useNavigate();

  async function signInWithEmail() {
          
  }
  
  return (
    <div>
      <h1>Login</h1>      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibir mensagem de erro */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={signInWithEmail}>Logar</button>      
      <button onClick={() => navigate('/cadastro')}>
        Cadastrar
      </button>
    </div>
  );
}

export default App;
