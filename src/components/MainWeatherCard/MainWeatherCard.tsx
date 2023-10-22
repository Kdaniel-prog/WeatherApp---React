import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wind from "../../assets/wind.png";
import classes from "./MainWeatherCard.module.css";
import MainWeatherCardProps from './MainWeatherCardProps';
import WeatherImage from '../WeatherImage/WeatherImage';

const MainWeatherCard = (props: MainWeatherCardProps) =>{

    const windStyle = {
        WebkitMask: `url(${wind}) no-repeat center / contain`,
        width: '32px',
        height: '32px',
        marginLeft: '-30px',
        marginRight: '5px',
        marginTop: '25px',
    };

    return (
        <div className={`${classes.spacing}`}>
            <Container className="p-4" fluid="md">
                <Row className="justify-content-md-center">
                    <Col xs={7}>
                        <h1>{props.name}</h1>
                        <p className={`${classes.weather__country}`}>Country: {props.country}</p>
                        <p className={`${classes.weather__country}`}>Regio: {props.regio}</p>
                        <Container>
                            <Row>
                                <Col className={`${classes.weather__group}`}>
                                    <h1>{props.temp}°</h1>
                                    <p className={`${classes.weather__condition}`}>{props.conditionText}</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className={`${classes.weather__wind__wrapper}`}>
                                <Col className={`${classes.weather__group}`}>
                                <p className={`${classes.weather__wind__title}`}>Wind</p>
                                <span className={`${classes.weather__wind__icon}`} style={windStyle}>
                                </span>
                                <ul className={`${classes.weather__wind}`}>
                                    <li>
                                        km/h: {props.windKph}  
                                    </li>
                                    <li>
                                        direction: {props.windDir}  
                                    </li> 
                                    <li>
                                        degree: {props.windDegree}° 
                                    </li> 
                                </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <div className={`${classes.weather__img}`}>
                            <WeatherImage width={160} code={props.code}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default MainWeatherCard;