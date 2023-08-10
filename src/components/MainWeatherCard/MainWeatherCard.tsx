import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from "../UI/Card/Card";

import wind from "../../assets/wind.png";

import "./MainWeatherCard.css";
import MainWeatherCardProps from './MainWeatherCardProps';
import WeatherImage from '../WeatherImage/WeatherImage';

const MainWeatherCard = (props: MainWeatherCardProps) =>{

    const windStyle = {
        WebkitMask: `url(${wind}) no-repeat center / contain`,
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        marginLeft: '-30px',
        marginRight: '5px',
        marginTop: '25px',
    };

    return (
        <Card>
            <Container className="p-4" fluid="md">
                <Row className="justify-content-md-center">
                    <Col xs={7}>
                        <h1>{props.name}</h1>
                        <p className='weather--country'>{props.country}</p>
                        <Container>
                            <Row>
                                <Col className='weather--group'>
                                    <h1>{props.temp}°</h1>
                                    <p className='weather--condition'>{props.conditionText}</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col className='weather--group'>
                                <p className='weather--wind__title'>Wind</p>
                                <span style={windStyle}>
                                </span>
                                <ul className='weather--wind'>
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
                        <WeatherImage width={200} code={props.code}/>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
};

export default MainWeatherCard;