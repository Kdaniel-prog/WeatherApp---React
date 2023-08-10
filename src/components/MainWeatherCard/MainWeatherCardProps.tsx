export default interface MainWeatherCardProps{
    name: string,
    code: number,
    country: string,
    conditionText: string,
    temp: number,
    windKph: number,
    windDir: string,
    windDegree: number,
}