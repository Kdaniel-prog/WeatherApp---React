import { SpecificTimeProps } from "../TodayForecast/SpecificTimeProps";

export default interface MainPageProps{
    name: string,
    code: number,
    country: string,
    conditionText: string,
    temp: number,
    windKph: number,
    windDir: string,
    windDegree: number,
    times: SpecificTimeProps[]
}