import MainWeatherCard from "../MainWeatherCard/MainWeatherCard";
import TodayForecast from "../TodayForecast/TodayForecast";
import SearchBar from "../SearchBar/searchBar";
import MainPageProps from "./MainPageProps";

const MainPage = (props: MainPageProps) => {

    return(
        <div>
            <SearchBar />
            <MainWeatherCard
                name={props.mainWeatherCardProps.name}
                code={props.mainWeatherCardProps.code}
                country={props.mainWeatherCardProps.country}
                conditionText={props.mainWeatherCardProps.conditionText}
                temp={props.mainWeatherCardProps.temp}
                windKph={props.mainWeatherCardProps.windKph}
                windDir={props.mainWeatherCardProps.windDir}
                windDegree={props.mainWeatherCardProps.windDegree}
            />
            <TodayForecast datas={props.todayForecast}/>
        </div>
    )
}

export default MainPage;