import WeatherData from "../api/apiWeatherProps/WeatherData";
import CitiesProps from "../components/SearchBar/CitiesProps";

export default interface MainPageProps{
    onResult(result: CitiesProps): void;
    weatherData: WeatherData | null;
}