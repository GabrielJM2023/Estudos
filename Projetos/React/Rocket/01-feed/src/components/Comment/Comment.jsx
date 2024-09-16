import { FaTrashCan } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

import './style.css';

export function Comment(){
    return(
        <div className='Comment'>
            <img src='https://github.com/GabrielJM2023.png'
                                className='avatar'>
            </img>
            <div className='CommentBox'>
                <div className='CommentContent'>
                    <header>
                        <div className='AuthorAndTime'>
                            <strong>Gabriel Jardim Machado</strong>
                            <time title='20 de Junho as 22:50h' dateTime='2022-05-11 22:49:00'>Cerca de 1hr atrás</time>    
                        </div>

                        <button title='Deletar comentário'>
                            <FaTrashCan></FaTrashCan>
                        </button>
                    </header>
                    <p>
                        Muito bom
                    </p>                    
                </div>    
                <footer>
                    <button>
                        <AiOutlineLike></AiOutlineLike>                        
                        Aplaudir     
                        <span>20</span>
                    </button>
                </footer>
            </div>    
        </div>
    );
}
