import { SpecificTimeProps } from "../TodayForecast/SpecificTimeProps";
import MainWeatherCardProps from "../MainWeatherCard/MainWeatherCardProps";

export default interface MainPageProps{
    onResult(result: string): void;
    mainWeatherCardProps: MainWeatherCardProps,
    todayForecast: SpecificTimeProps[],
}