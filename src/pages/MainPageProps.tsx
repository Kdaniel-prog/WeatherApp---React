import WeatherData from "../api/apiWeatherProps/WeatherData";

export default interface MainPageProps{
    onResult(result: CitiesProps): void;
    weatherData: WeatherData | null;
}