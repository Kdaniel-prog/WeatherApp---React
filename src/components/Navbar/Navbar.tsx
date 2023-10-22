import React from "react";
import Card from "../UI/Card/Card";

import classes from './Navbar.module.css';

const Navbar = () =>{
    const handleClick = (event: HTMLElement<>) =>{

    }

    return (
        <Card className={`${classes.navbar__bg}`}>
            <p className={`${classes.navbar__item}`} onClick={handleClick} data-id="home">Daily Weather</p>
            <p className={`${classes.navbar__item}`} onClick={handleClick} data-id="forecast">Forecast</p>
        </Card>
    );
}

export default Navbar;