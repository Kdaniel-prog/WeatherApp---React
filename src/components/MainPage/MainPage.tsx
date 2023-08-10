import MainWeatherCard from "../MainWeatherCard/MainWeatherCard";
import MainWeatherCardProps from './MainPageProps';
import TodayForecast from "../TodayForecast/TodayForecast";

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
            <TodayForecast datas={props.times}/>
        </div>
    )
}

export default MainPage;