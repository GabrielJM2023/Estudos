import './style.css';

import Logo from '../../assets/Ignite-logo.svg';

export function Header(){
    return(
        <header className='header'>
            <img src={Logo} alt="Logo do ignite"/>   
            <h2>Ignite Feed</h2>         
        </header>
    );
}