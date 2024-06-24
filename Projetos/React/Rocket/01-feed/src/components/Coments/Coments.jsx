import './style.css';

export function Coments(){
    return(
        <div className='Coments'>
            <strong>Deixe seu comentário</strong>            
            <textarea 
                placeholder='Deixe seu comentário'
            />
            <button type='submit'>Comentar</button>
        </div>
    );
}
