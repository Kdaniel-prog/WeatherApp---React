export default interface ForecastCardProps{
    text: string,
    code: number,
    isRain: boolean,
    isSnow: boolean,
    rainChance: number,
    snowChance: number,
    maxTempC: number,
    minTempC: number,
    maxWindKph: number,
    minWindKph: number,
    uv: number,
    date: Date
}
