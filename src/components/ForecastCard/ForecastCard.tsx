import classes from "./ForecastCard.module.css";
import ForecastCardProps from "./ForecastCardProps";
import Card from "../UI/Card/Card";
import WeatherImage from "../WeatherImage/WeatherImage";
import wind from "../../assets/wind1.png";
import uv from "../../assets/uv.png";
import snowflake from "../../assets/snowflake.png";
import rain from "../../assets/rain.png";

const ForecastCard = (props: ForecastCardProps) =>{
    // Format the date
    const [month, year, day] = props.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', year: 'numeric' }).split(' ');

    return (
        <div className={classes.space}>
            <Card className={classes.card__items}>
                <div className={classes.card__spacing}>
                    <div className={classes.forecast__date}>
                        <p className={classes.forecast__date}>{day}</p>
                        <p className={classes.forecast__date}>{month}</p>
                        <p className={classes.forecast__date}>{year}</p>
                    </div>
                    <div className={classes.forecast__img_spacing}>
                        <WeatherImage code={props.code} width={65} />
                    </div>
                    <div className={`${classes.forecast__spacing} ${classes.forecast__icon}` }>
                        <img src={uv} width={30} className={classes.forecast__center_icon}/>
                        {props.uv}
                    </div>
                    <div className={`${classes.forecast__spacing} ${classes.forecast__icon} ${classes.forecast_wind_text}` }>
                        <img src={wind} width={30} className={classes.forecast__center_icon}/>
                        {props.maxWindKph} km/h
                    </div>
                    {props.isSnow ?  
                    <div className={`${classes.forecast__spacing} ${classes.forecast__icon}` }>
                    <img src={snowflake} width={30} className={classes.forecast__center_icon}/>
                        {props.snowChance}%
                    </div>
                    : <div className={classes.forecast__spacing}></div>
                    }
                    {props.isRain ?  
                    <div className={`${classes.forecast__spacing} ${classes.forecast__icon}` }>
                    <img src={rain} width={25} className={classes.forecast__center_icon}/>
                        {props.rainChance}%
                    </div>
                    : <div className={classes.forecast__spacing}></div>
                    }
                    <div className={`${classes.forecast__tempWrapper}`}>
                        <p className={`${classes.forecast__warmTemp} ${classes.forecast__center_text}`  }>
                            {props.maxTempC}°
                        </p>
                        <p className={ `${classes.forecast__center_text} ${classes.forecast__coldTemp}`}>
                            {props.minTempC}°
                        </p>
                    </div>

                </div>

            </Card>
        </div>
    );
}

export default ForecastCard;