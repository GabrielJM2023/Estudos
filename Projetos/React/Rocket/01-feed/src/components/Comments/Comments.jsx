import './style.css';
import { Comment } from '../Comment';

export function Comments(){
    return(
        <div className='Comments'>
            <strong>Deixe seu comentário</strong>            
            <textarea 
                placeholder='Deixe seu comentário'
            />
            <footer>
                <button type='submit'>Publicar</button>                
            </footer>
            <div className='CommentList'>
                <Comment></Comment>
            </div>
        </div>
    );
}
