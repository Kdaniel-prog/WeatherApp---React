import WeatherData from "../api/apiWeatherProps/WeatherData";

export default interface MainPageProps{
    onResult(result: string): void;
    weatherData: WeatherData | null;
}