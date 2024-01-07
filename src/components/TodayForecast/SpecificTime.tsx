import WeatherImage from "../WeatherImage/WeatherImage";
import {SpecificTimeProps} from "./SpecificTimeProps";
import Col from 'react-bootstrap/Col';
import classes from './SpecificTime.module.css';

const SpecificTime = (props: SpecificTimeProps) => {

    // Convert the string to a Date object
    const time = new Date(props.time);

    // Check if the conversion was successful
    if (isNaN(time.getTime())) {
        // Handle invalid date format
        console.error('Invalid date format:', props.time);
        return null; // or provide a default rendering or error message
    }

    // Format the date as a time string
    const timeString = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(time);

    return (
        <Col>
            <div>
                <p className={`${classes.weather__text}`} >{timeString}</p>
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