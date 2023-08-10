import { CurrentWeather } from "./CurrentWeather";
import { LocationData } from "./LocationData";


export default interface WeatherData {
    location: LocationData;
    current: CurrentWeather;
}