import MainWeatherCard from "../../components/MainWeatherCard/MainWeatherCard";
import TodayForecast from "../../components/TodayForecast/TodayForecast";
import MainPageProps from "./MainPageProps";
import { SpecificTimeProps } from "../../components/TodayForecast/SpecificTimeProps";
import MainWeatherCardProps from "../../components/MainWeatherCard/MainWeatherCardProps";
import HourlyForecast from "../../api/apiWeatherProps/HourlyForecast";

const MainPage = (props: MainPageProps) => {

    const nullHourlyForeCast: HourlyForecast[] = [{
        time: "",
        temp_c: 0,
        temp_f: 0,
        is_day: 0,
        condition: {
            text: "",
            icon: "",
            code: 0
        }
    }]

    const hourForecast = props?.weatherData?.forecast?.forecastday?.[0]?.hour
        ? props?.weatherData?.forecast?.forecastday?.[0]?.hour
        : nullHourlyForeCast;
    console.log(JSON.parse(JSON.stringify(hourForecast)))
    const todayDates: SpecificTimeProps[] = hourForecast.map(hourForecast =>{
        const specHour: SpecificTimeProps = {
            time: hourForecast.time ? hourForecast.time : '24:00',
            temp_c: hourForecast.temp_c ? hourForecast.temp_c: 0,
            code: hourForecast.condition.code,
        }
        return specHour;
    })


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

    return(
        <div>
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