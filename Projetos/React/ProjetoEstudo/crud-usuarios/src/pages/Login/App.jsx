import React, { useState } from 'react';
import ImgLogin from './ImgLogin.svg';
import './styleLogin.css'
import { supabase } from '../../supabaseClient'

import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      console.error(error.message); // Exibir mensagem de erro, se houver
    } else {
      console.log('Usuário logado com sucesso:', data);
      navigate('/home'); // Redirecionar para a página principal ou painel de usuário
    }
  }
  
  return (
    <div className='main-login'>
      <div className="left-login">
        <div className="card-login">
          <h1>Login</h1>  
          <div className="textfield">
            <label>Email</label>  
            <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="textfield">
            <label>Senha</label>  
            <input type='password' name='senha' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
          </div>          
          <button type='button' className='btn-login' onClick={handleLogin}>Entrar</button>
          <a href='/home'>Entrar sem fazer login</a>
        </div>  
      </div>
      <div className="right-login">
        <h1>Faça seu Login</h1>
        <img src={ImgLogin} alt ='Login' className='ImgLogin'/>
      </div>            
    </div>
  );
}

export default App;
