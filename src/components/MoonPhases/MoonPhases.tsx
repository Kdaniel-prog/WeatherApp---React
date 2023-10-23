import react from "react";

import Card from '../UI/Card/Card';
import {MoonCollection} from "./MoonPhasesProps";
import classes from "./MoonPhases.module.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MoonImage from "../MoonImage/MoonImage";

const MoonPhases = (props: MoonCollection) => {

    return (
        <Card className={`${classes.card__items}`}>
            <div>
                <p className={`${classes.weather__title}`}>
                    Moon Phases 
                </p>
            </div>
            <Container>
                <Row className={classes.row__items}>
                    {props.data.map((item, index) => { return <MoonImage key={index} day={item.day} code={item.moon_phase} width={70} /> })}
                </Row>
            </Container>
        </Card>
    )
}

export default MoonPhases;