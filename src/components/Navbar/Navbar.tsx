import { NavLink } from "react-router-dom";

import Card from "../UI/Card/Card";
import classes from './Navbar.module.css';

const Navbar = () =>{

    return (
        <Card className={`${classes.navbar__bg}`}>
            <p className={`${classes.navbar__name}`}>Weather App</p>
            <div className={`${classes.navbar__menu__wrapper}`}>
                <NavLink to="/" className={({isActive})=>{
                    return isActive ? classes.navbar__item__active : classes.navbar__item;
                }}end={true}>Daily Weather</NavLink>
                <NavLink to="/forecast"  className={({isActive})=>{
                    return isActive ? classes.navbar__item__active : classes.navbar__item;
                }}>Forecast</NavLink>
            </div>

        </Card>
    );
}

export default Navbar;