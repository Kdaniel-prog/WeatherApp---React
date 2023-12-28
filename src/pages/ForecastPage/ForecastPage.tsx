import ForeCastPageProps from "./ForecastPageProps";
import { SpecificMoonProps } from "../../components/MoonPhases/MoonPhasesProps";
import MoonPhases from "../../components/MoonPhases/MoonPhases";
import classes from "./ForecastPage.module.css";
import ForecastCardProps from "../../components/ForecastCard/ForecastCardProps";
import ForecastForDays from "../../components/ForecastForDays/ForecastForDays";

const ForecastPage = (props: ForeCastPageProps) =>{

    const getDayName = (date: Date) =>{
        return date.toLocaleDateString('en-US', {weekday: 'long'});
    }

    const moonPhases: SpecificMoonProps[] | undefined = props.weatherData?.forecast.forecastday.map((item) => {
        if(item) {
            const specMoon: SpecificMoonProps = {
                moon_phase: item.astro.moon_phase  ,
                day: getDayName(new Date(item.date))
            };
            return specMoon;
        }else {
            const nullObjectMoon: SpecificMoonProps = {
                moon_phase: "Full Moon",
                day: getDayName(new Date())
            };
            return nullObjectMoon;
        }
    });
    const moonCollection: SpecificMoonProps[] = moonPhases ? moonPhases : [];

    const forecastDays: ForecastCardProps[] | undefined = props.weatherData?.forecast.forecastday.map((item)=>{
        if(item){
            const day: ForecastCardProps = {
                text: item.day.condition.text,
                code: item.day.condition.code,
                rainChance: item.day.daily_chance_of_rain,
                snowChance: item.day.daily_chance_of_snow,
                isRain: item.day.daily_will_it_rain,
                isSnow: item.day.daily_will_it_snow,
                maxTempC: item.day.maxtemp_c,
                minTempC: item.day.mintemp_c,
                maxWindKph: item.day.maxwind_kph,
                minWindKph: item.day.mintemp_c,
                uv: item.day.uv,
                date: new Date(item.date)
            }
            return day;
        }else{
            const nullDay: ForecastCardProps = {
                text: "",
                code: 0,
                rainChance: 0,
                snowChance: 0,
                isRain: false,
                isSnow: false,
                maxTempC: 0,
                minTempC: 0,
                maxWindKph: 0,
                minWindKph: 0,
                uv: 0,
                date: new Date()
            }
            return nullDay;
        }
    });

    const daysollection: ForecastCardProps[] = forecastDays ? forecastDays : [];

    return (
        <div className={classes.wrapper}>
            <ForecastForDays days={daysollection} />
            <MoonPhases data={moonCollection}/>
        </div>
    )
}

export default ForecastPage