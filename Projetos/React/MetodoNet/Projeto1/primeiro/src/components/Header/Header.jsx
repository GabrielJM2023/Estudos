import React from "react";
import './styles.css'
import { FaArrowUpFromWaterPump } from "react-icons/fa6";


function Header(){
    return(
        <div className="topnav">
            <FaArrowUpFromWaterPump className="icone"/>
            <p>Header</p>
        </div>
    )
}

export default Header;