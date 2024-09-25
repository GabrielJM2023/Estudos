import './style.css'
export function Avatar(props){
    return(
        <img className='avatar' src={props.src}></img>
    );
}