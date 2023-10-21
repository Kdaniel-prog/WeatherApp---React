export default interface MainWeatherCardProps{
    name: string,
    code: number,
    country: string,
    regio: string,
    conditionText: string,
    temp: number,
    windKph: number,
    windDir: string,
    windDegree: number
}