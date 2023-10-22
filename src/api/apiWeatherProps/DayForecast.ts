import Condition from "./Condition";

export default interface DayForecast {
    totalsnow_cm: number;
    condition: Condition;
}