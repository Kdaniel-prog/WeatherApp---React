import { NavLink } from "react-router-dom";

import Card from "../UI/Card/Card";
import classes from './Navbar.module.css';
import { useEffect, useMemo, useRef, useState } from "react";

const Navbar = () =>{
    const container = useRef<HTMLDivElement>(null);
    const [paddingTop, setPaddingTop] = useState<string>('0px');

    useEffect(() => {
        const handleResize = () => {
            // Check if container.current is truthy before accessing clientWidth
            if (container.current) {
                const newPaddingTop = container.current.clientWidth <= 343 ? '40px' : '0px';
                setPaddingTop(newPaddingTop);
            }
        };

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Initial calculation on mount
        handleResize();

        // Detach the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [container]);

    return (
        <Card className={`${classes.navbar__bg}`} >
            <div ref={container}>
                <p className={`${classes.navbar__name}`}>Weather App</p>
                <div className={`${classes.navbar__menu__wrapper}`} style={{paddingTop}}>
                    <NavLink to="/" className={({isActive})=>{
                        return isActive ? classes.navbar__item__active : classes.navbar__item;
                    }}end={true}>Daily Weather</NavLink>
                    <NavLink to="/forecast"  className={({isActive})=>{
                        return isActive ? classes.navbar__item__active : classes.navbar__item;
                    }}>Forecast</NavLink>
                </div>
            </div>
        </Card>
    );
}

export default Navbar;