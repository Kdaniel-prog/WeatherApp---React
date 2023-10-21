import Astro from "./Astro";
import DayForecast from "./DayForecast";
import HourlyForecast from "./HourlyForecast";

export default interface ForecastDay {
    astro: Astro;
    day: DayForecast;
    hour: HourlyForecast[];
}