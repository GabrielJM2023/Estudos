import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import { supabase } from '../../supabaseCliente';
import { useState } from 'react';

const Login = () => {  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');    
    const [error, setError] = useState('');    

    const Register = async () => {
        window.location.href = '/Register';
    }

    const handleLogin = async () =>{
        try{
            const {error} = await supabase.auth.signInWithPassword({
                email: email,
                senha: senha,
            });
   
            
            if (error){
                setError(error.message);
            }else {
                window.location.href = '/home';
            }

        } catch (error){
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
    <div className='CardLogin'>        
        <Container component="main" maxWidth="md">            
        <Box
            sx={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Container component="main" maxWidth="xs" sx={{
                    borderRadius: 5,                    
                }}>
                    <Box component="form" noValidate 
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mb: 4,
                        }}
                    >
                        <Typography component="h3" variant="h3">
                            Sign In
                        </Typography>
                        
                        <TextField
                            margin="normal"                                    
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            className={'primary.main'}
                            id="password"
                            autoComplete="current-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />   

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Manter conectado"
                            sx={{ alignSelf: 'flex-start' }}
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Logar
                        </Button>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            handleLogin={Register}
                        >
                            Cadastrar
                        </Button>                            
                    </Box>                        
                </Container>
            </Box>             
        </Container>        
    </div>
  );
};

export default Login;
