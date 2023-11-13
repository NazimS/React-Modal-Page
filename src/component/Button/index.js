import React from "react";
import '../../assets/styles/button.css'


const Button = ({onClick}) => {
    return (
        <div className="content">
            <button className="open-btn" onClick={onClick}>Open window</button>
        </div>
    )
}


export default Button;