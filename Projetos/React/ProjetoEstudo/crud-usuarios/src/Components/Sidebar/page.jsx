import './style.css'
import Logo from '../../assets/logo192.png'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiSoccerKick } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ children }){
    const [tamanho, setTamanho] = useState(true);

    const toggleSidebar = () => {
        setTamanho(!tamanho);
    }
    return(
        <div className="home">
            <nav className={`main-home ${tamanho ? 'expanded' : 'collapsed'}`}>
                <header>
                    <Link to='/home'>
                        <div className='image-text'>
                            <span className='image'>
                                <img src={Logo} alt='logo'/>
                            </span>

                            {tamanho && (
                                <div className="text header-text">
                                    <span className='name'>NOME</span>
                                    <span className='profession'>Estatísticas</span>
                                </div>
                            )}
                        </div>
                    </Link>

                    <FaLongArrowAltLeft className={`Icon ${tamanho ? 'rotate' : ''}`} onClick={toggleSidebar} />
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className='menu-links'> 
                            <li className='nav-link'>
                                <Link to='#'>
                                    <RiTeamFill className='icon'/>    
                                    {tamanho && <span className='text nav-text'>Times</span>}
                                </Link>
                            </li>
                            <li className='nav-link'>
                                <Link to='/jogador'>
                                    <GiSoccerKick className='icon'/>    
                                    {tamanho &&<span className='text nav-text'>Jogador</span>}
                                </Link>
                            </li> 
                            <li className='nav-link'>                            
                                <Link to='/login'>
                                    <FaDoorOpen className='icon'/>    
                                    {tamanho &&<span className='text nav-text'>Sair</span>}
                                </Link>
                            </li>       
                        </ul>                    
                    </div>                            
                </div>            
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Sidebar;