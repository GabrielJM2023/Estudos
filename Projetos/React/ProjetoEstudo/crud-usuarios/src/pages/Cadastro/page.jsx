import './styleCadastro.css'
import ImgCadastro from './ImgCadastro.svg'
import { supabase } from '../../supabaseClient'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    
    async function signUpWithEmail() {
        console.log('Email:', email);
        console.log('Senha:', senha);

        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: senha,
        });
      
        if (error) {
          console.error('Erro ao registrar usuário:', error.message);
        } else {
          console.log('Usuário registrado com sucesso:', data);
          navigate('/login');
        }
    } 

    return(        
        <div className='main-cadastro'>
            <div className="left-cadastro">
                <h1>Faça seu Cadastro<br/>E entre para o nosso time</h1>
                <img src={ImgCadastro} className='ImgCadastro' alt='Familia'/>
            </div>
            <div className="right-cadastro">
                <div className='card-cadastro'>
                    <h1>Cadastro</h1>                    
                    <div className="textfield">
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>                        
                    </div>
                    <div className="textfield">
                        <label>Senha</label>
                        <input type='password' name='senha' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>                        
                    </div>
                    <button onClick={signUpWithEmail} type='button' className='btn-cadastro'>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro