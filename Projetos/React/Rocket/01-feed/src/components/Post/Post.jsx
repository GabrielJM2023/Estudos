import './style.css';

import { Comments } from '../Comments'

export function Post(){
    return(
        <div className='Post'>
            <article>
                <form>
                    <header>
                        <div className='author'>
                            <img src='https://github.com/GabrielJM2023.png'
                                className='avatar'></img>
                            <div className='authorInfo'>
                                <strong>Gabriel Jardim</strong>
                                <span>Programador Front-End</span>
                            </div>
                        </div>

                        <time title='20 de Junho as 22:50h' dateTime='2022-05-11 22:49:00'>Publicado há 1h</time>
                    </header>

                    <div className='content'>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉
                        <a href='#'>jane.design/doctorcare</a>
                    </p>
                    <p>
                        <a href='#'>#novoprojeto</a>
                        <a href='#'>#nlw</a>
                        <a href='#'>#rocketseat</a>
                    </p>
                    </div>
                    
                    <Comments></Comments>                    
                </form>
            </article>
        </div>
    );
}