import React from 'react';
import "./Button.scss";


const Button = (props) => {
    const {buttonText} = props;
    let buttonStyle = "button";
    return <button className={buttonStyle}>{buttonText}</button>;
}

export default Button