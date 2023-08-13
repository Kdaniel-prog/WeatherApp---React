import { SpecificTimeProps } from "../TodayForecast/SpecificTimeProps";
import MainWeatherCardProps from "../MainWeatherCard/MainWeatherCardProps";

export default interface MainPageProps{
    mainWeatherCardProps: MainWeatherCardProps,
    todayForecast: SpecificTimeProps[]
}