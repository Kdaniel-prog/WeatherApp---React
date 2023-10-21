import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import wind from "../../assets/wind.png";

import "./MainWeatherCard.css";
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
        <div className='spacing'>
            <Container className="p-4" fluid="md">
                <Row className="justify-content-md-center">
                    <Col xs={7}>
                        <h1>{props.name}</h1>
                        <p className='weather--country'>Country: {props.country}</p>
                        <p className='weather--country'>Regio: {props.regio}</p>
                        <Container>
                            <Row>
                                <Col className='weather--group'>
                                    <h1>{props.temp}°</h1>
                                    <p className='weather--condition'>{props.conditionText}</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className='weather--wind__wrapper'>
                                <Col className='weather--group'>
                                <p className='weather--wind__title'>Wind</p>
                                <span className='weather--wind__icon' style={windStyle}>
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
                        <div className='weather--img'>
                            <WeatherImage width={160} code={props.code}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default MainWeatherCard;