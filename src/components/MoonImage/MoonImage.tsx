import MoonImageObject from "./MoonImageObject";
import MoonImageProps from "./MoonImageProps";
import classes from "./MoonImage.module.css";

//*Weather icons */
import moon_first_quarter from "../../assets/moon/moon_first_quarter.png";
import moon_full from "../../assets/moon/moon_full.png";
import moon_last_quarter from "../../assets/moon/moon_last_quarter.png";
import moon_new from "../../assets/moon/moon_new.png";
import moon_waning_crescent from "../../assets/moon/moon_waning_crescent.png";
import moon_waning_gibbous from "../../assets/moon/moon_waning_gibbous.png";
import moon_waxing_crescent from "../../assets/moon/moon_waxing_crescent.png";
import moon_waxing_gibbous from "../../assets/moon/moon_waxing_gibbous.png";

const MoonImage = (props: MoonImageProps) =>{

    const moons: MoonImageObject[] = [
        {path: moon_first_quarter, codes: 'First Quarter'},
        {path: moon_full, codes: 'Full Moon'},
        {path: moon_last_quarter, codes: 'Last Quarter'},
        {path: moon_new, codes: 'New Moon'},
        {path: moon_waning_crescent, codes: 'Waning Crescent'},
        {path: moon_waning_gibbous, codes: 'Waning Gibbous'},
        {path: moon_waxing_crescent, codes: 'Waxing Crescent'},
        {path: moon_waxing_gibbous, codes: 'Waxing Gibbous'}
    ];
    
    const moonImage = moons.find(x => x.codes === props.code);

    const moonImagePath = moonImage ? moonImage.path : moons[0].path;

    return (
        <div className={classes.moon_wrapper}>
            <p className={classes.moon_text}>{props.day}</p>
            <img src={moonImagePath} width={props.width} className={classes.moon} />
            <p className={classes.moon_text}>{props.code}</p>
        </div>
    ) 

};

export default MoonImage;