import Condition from "./Condition";

export default interface DayForecast {
    uv: number;
    mintemp_c: number;
    maxwind_kph: number;
    daily_chance_of_snow: number;
    daily_chance_of_rain: number;
    maxtemp_c: number;
    daily_will_it_rain: boolean;
    daily_will_it_snow: boolean;
    totalsnow_cm: number;
    condition: Condition;
}