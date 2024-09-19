// src/pages/Login/Login.js
import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css';
import theme from '../../theme/theme';

const Login = () => {  
  return (
    <form>        
        <div className='CardLogin'>        
            <Container sx={{backgroundColor: theme.palette.secondary.main}}>
                <h1>Sing In</h1>                
                <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />                
                </div>
                <Button variant="contained">Contained</Button>                
            </Container>        
        </div>
    </form>
  );
};

export default Login;
