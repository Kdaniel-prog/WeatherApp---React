import WeatherImage from "../WeatherImage/WeatherImage";
import {SpecificTimeProps} from "./SpecificTimeProps";
import Col from 'react-bootstrap/Col';
import './SpecificTime.css';

const SpecificTime = (props: SpecificTimeProps) => {
    const timeString = props.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return (
        <Col>
            <div>
                <p className="weather--text">{timeString}</p>
            </div>
            
            <div className="image-container">
                <div className="centered-content">
                    <WeatherImage width={70} code={props.code}/>
                </div>
            </div>
            <p className="weather--text">{props.temp_c}°</p>
        </Col>
    )
}

export default SpecificTime;