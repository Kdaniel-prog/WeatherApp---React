import react from "react";

import ForeCastPageProps from "./ForecastPageProps";
import {SpecificMoonProps } from "../../components/MoonPhases/MoonPhasesProps";
import MoonPhases from "../../components/MoonPhases/MoonPhases";
import classes from "./ForecastPage.module.css";

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
        
    return (
        <div className={classes.wrapper}>
            <MoonPhases data={moonCollection}/>
        </div>
    )
}

export default ForecastPage