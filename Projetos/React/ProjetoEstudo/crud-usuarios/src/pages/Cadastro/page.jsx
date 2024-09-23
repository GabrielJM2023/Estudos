import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

import { supabase } from '../../supabaseClient';

function Cadastro(){
    const [email, setEmail] = useState('');    
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async () => {
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: senha,
          });

        if (error) {
            console.error('Erro ao cadastrar:', error);
        } else {
            console.log('Dados inseridos:', user);
            navigate('/');
        }
    }

    return(
        <div className='Cadastro'>
            <div className='Titulo'>
                <h1>Cadastro</h1>            
            </div>
            <div className='Informacoes'>
                <input 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <input 
                    type='password'
                    placeholder='Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <button onClick={(handleCadastro)}>
                Cadastrar
            </button>

            <button onClick={() => navigate('/')}>
                Logar
            </button>
        </div>
    );
}

export default Cadastro