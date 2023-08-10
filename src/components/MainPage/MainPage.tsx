import MainWeatherCard from "../MainWeatherCard/MainWeatherCard";
import MainWeatherCardProps from '../MainWeatherCard/MainWeatherCardProps';

const MainPage = (props: MainWeatherCardProps) => {

    return(
        <div>
            <MainWeatherCard 
                name={props.name}
                code={props.code}
                country={props.country}
                conditionText={props.conditionText}
                temp={props.temp}
                windKph={props.windKph}
                windDir={props.windDir}
                windDegree={props.windDegree}
            />
        </div>
    )
}

export default MainPage;