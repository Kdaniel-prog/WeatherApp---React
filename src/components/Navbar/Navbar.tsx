import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../UI/Card/Card";
import classes from './Navbar.module.css';

const Navbar = () =>{

    return (
        <Card className={`${classes.navbar__bg}`}>
            <NavLink to="/" className={({isActive})=>{
                return isActive ? classes.navbar__item__active : classes.navbar__item;
            }}end={true}>Daily Weather</NavLink>
            <NavLink to="/forecast"  className={({isActive})=>{
                return isActive ? classes.navbar__item__active : classes.navbar__item;
            }}>Forecast</NavLink>
        </Card>
    );
}

export default Navbar;