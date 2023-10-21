import MainWeatherCard from "../components/MainWeatherCard/MainWeatherCard";
import TodayForecast from "../components/TodayForecast/TodayForecast";
import SearchBar from "../components/SearchBar/SearchBar";
import MainPageProps from "./MainPageProps";
import { SpecificTimeProps } from "../components/TodayForecast/SpecificTimeProps";
import MainWeatherCardProps from "../components/MainWeatherCard/MainWeatherCardProps";
import CitiesProps from "../components/SearchBar/CitiesProps";

const MainPage = (props: MainPageProps) => {

     // Extract specific hours at indices 6, 9, 12, 15, 18, and 21
  const specificHours = [6, 9, 12, 15, 18, 21];

  const todayDates: SpecificTimeProps[] = specificHours.map((index) => {
    const hourForecast = props?.weatherData?.forecast?.forecastday?.[0]?.hour?.[index];

    if (hourForecast) {
        const specHour: SpecificTimeProps = {
            time: new Date(hourForecast.time),
            temp_c: hourForecast.temp_c,
            code: hourForecast.condition.code,
        };
        return specHour;
    
    } else {
        const nullObjectHour: SpecificTimeProps = {
            time: new Date(),
            temp_c: 0,
            code: 0
        };
        return nullObjectHour;
    }
  });

    const mainWeatherCardProps: MainWeatherCardProps = {
        name: props?.weatherData?.location?.name
            ? props?.weatherData?.location?.name
            : "",
        regio: props?.weatherData?.location?.region
            ? props?.weatherData?.location?.region
            : "",
        code: props?.weatherData?.current?.condition.code
            ? props?.weatherData?.current?.condition?.code
            : 1000,
        country: props?.weatherData?.location?.country
            ? props?.weatherData?.location?.country
            : "",
        conditionText: props?.weatherData?.current?.condition.text
            ? props?.weatherData?.current?.condition?.text
            : "Sunny",
        temp: props?.weatherData?.current?.temp_c
            ? props?.weatherData?.current?.temp_c
            : 0,
        windKph: props?.weatherData?.current?.wind_kph
            ? props?.weatherData?.current?.wind_kph
            : 0,
        windDir: props?.weatherData?.current?.wind_dir
            ? props?.weatherData?.current?.wind_dir
            : "",
        windDegree: props?.weatherData?.current?.wind_degree
            ? props?.weatherData?.current?.wind_degree
            : 0,
        
    };


    const handleResult = (result: CitiesProps) =>{
        props.onResult(result);
    }

    return(
        <div>
            <SearchBar onResult={handleResult} />
            <MainWeatherCard
                name={mainWeatherCardProps.name}
                code={mainWeatherCardProps.code}
                regio={mainWeatherCardProps.regio}
                country={mainWeatherCardProps.country}
                conditionText={mainWeatherCardProps.conditionText}
                temp={mainWeatherCardProps.temp}
                windKph={mainWeatherCardProps.windKph}
                windDir={mainWeatherCardProps.windDir}
                windDegree={mainWeatherCardProps.windDegree}
            />
            <TodayForecast datas={todayDates}/>
        </div>
    )
}

export default MainPage;