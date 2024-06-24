import './style.css';

import { Sidebar } from '../Sidebar';
import { Post } from '../Post';

export function Wrapper(){
    return(
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <main>
                <Post></Post>
            </main>
        </div>
    );
}
