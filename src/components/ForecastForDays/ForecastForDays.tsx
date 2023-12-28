import ForecastForDaysProps from "./ForecastForDaysProps";
import classes from "./ForecastForDays.module.css";
import ForecastCard from "../ForecastCard/ForecastCard";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

const ForecastForDays = (props: ForecastForDaysProps) => {
    return (
            <Container>
                <Row classes={classes.row__items}>
                    {props.days.map((day, index) => { return <ForecastCard
                            key={index} 
                            text={day.text}
                            code={day.code}
                            isRain={day.isRain}
                            isSnow={day.isSnow}
                            rainChance={day.rainChance}
                            snowChance={day.snowChance}
                            maxTempC={day.maxTempC}
                            minTempC={day.minTempC}
                            maxWindKph={day.maxWindKph}
                            minWindKph={day.minWindKph}
                            uv={day.uv}
                            date={day.date} />  })}
                </Row>
            </Container>
        
    )
}

export default ForecastForDays;