import Astro from "./Astro";
import DayForecast from "./DayForecast";
import HourlyForecast from "./HourlyForecast";

export default interface ForecastDay {
    date: string;
    astro: Astro;
    day: DayForecast;
    hour: HourlyForecast[];
}