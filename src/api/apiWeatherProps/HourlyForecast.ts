import Condition from "./Condition";

export default interface HourlyForecast {
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    // Include other properties here
}