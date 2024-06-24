import './style.css';

export function Coments(){
    return(
        <div className='Coments'>
            <strong>Deixe seu comentário</strong>            
            <textarea 
                placeholder='Deixe seu comentário'
            />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </div>
    );
}
