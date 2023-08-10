import CurrentWeather from "./CurrentWeather";
import LocationData from "./LocationData";
import Forecast from "./Forecast";

export default interface WeatherData {
    location: LocationData;
    current: CurrentWeather;
    forecast: Forecast
}