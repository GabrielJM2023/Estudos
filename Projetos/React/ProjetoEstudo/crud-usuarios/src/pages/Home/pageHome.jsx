import React from 'react';
import Home from './page'; 
import './style.css'
import Logo from './Soccer-bro.svg'

const PageHome = () => {
  return (
    <Home>
      <div className="Paghome">
        <p className='titulo'>Programa feito para cadastro de times</p>      
        <img src={Logo} alt='Logo' className='ImgLogoHome'/>
      </div>      
    </Home>
  );
};

export default PageHome;