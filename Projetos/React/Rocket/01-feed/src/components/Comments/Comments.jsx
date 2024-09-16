import './style.css';
import { Comment } from '../Comment';

export function Comments(){
    return(
        <div className='Comments'>
            <div className='CommentArea'>
                <strong>Deixe seu comentário</strong>            
                <textarea 
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button className='CommentBox' type='submit'>Publicar</button>                
                </footer>
            </div>
            <div className='CommentList'>
                <Comment></Comment>
            </div>
        </div>
    );
}
