import React from "react";
import './styles.css';
import {ReactComponent as Logo} from '../../assests/images/logo.svg'

function Header(){
    return(
        <div className="topnav">
            <Logo></Logo>
        </div>
    )
}

export default Header;