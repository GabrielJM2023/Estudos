import './style.css';
import { PiPencilLine } from "react-icons/pi";

export function Sidebar(){
    return(
        <aside className='sidebar'>
            <img 
                src='https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Capa'
                >            
            </img>
            <div className='profile'>
                <img className='avatar' src='https://github.com/GabrielJM2023.png'></img>
                <strong>Gabriel Jardim</strong>
                <span>Programador Front-end</span>                
            </div>                
            <footer>
                <a href='#'>
                    <PiPencilLine size={20}/>
                    Editar seu perfil                    
                </a>
                
            </footer>
        </aside>
    );
}