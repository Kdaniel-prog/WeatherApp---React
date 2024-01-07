import WeatherImage from "../WeatherImage/WeatherImage";
import {SpecificTimeProps} from "./SpecificTimeProps";
import Col from 'react-bootstrap/Col';
import classes from './SpecificTime.module.css';

const SpecificTime = (props: SpecificTimeProps) => {
    return (
        <Col>
            <div>
                <p className={`${classes.weather__text}`} >{props.time}</p>
            </div>
            <div className={`${classes.image__container}`}>
                <div className={`${classes.centered__content}`}>
                    <WeatherImage width={70} code={props.code}/>
                </div>
            </div>
            <p className={`${classes.weather__text}`}>{props.temp_c}°</p>
        </Col>
    )
}

export default SpecificTime;