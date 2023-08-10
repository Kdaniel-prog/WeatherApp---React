import WeatherImageProps from "./WeatherImageProps";
import WeatherImageObject from "./WeatherImageObject";

//*Weather icons */
import weather0 from "../../assets/weather conditions/1003.png";
import weather1 from "../../assets/weather conditions/1006.png";
import weather2 from "../../assets/weather conditions/1030.png";
import weather3 from "../../assets/weather conditions/1063, 1066, 1069.png";
import weather4 from "../../assets/weather conditions/1087.png";
import weather5 from "../../assets/weather conditions/1114.png";
import weather6 from "../../assets/weather conditions/1117, 1255, 1258, 1261, 1264, 1279, 1282, 1276, 1273.png";
import weather7 from "../../assets/weather conditions/1135, 1147.png";
import weather8 from "../../assets/weather conditions/1150.png";
import weather9 from "../../assets/weather conditions/1153.png";
import weather10 from "../../assets/weather conditions/1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240, 1243, 1246.png";
import weather11 from "../../assets/weather conditions/1198, 1249, 1252.png";
import weather12 from "../../assets/weather conditions/1201, 1204, 1207.png";
import weather13 from "../../assets/weather conditions/1225, 1210, 1213, 1216, 1219, 1222, 1225, 1237.png";
import weather14 from "../../assets/weather conditions/1000.png";

const WeatherImage = (props: WeatherImageProps) =>{

    const weathers: WeatherImageObject[] = [
        {path: weather0, codes: '1003'},
        {path: weather1, codes: '1006'},
        {path: weather2, codes: '1030'},
        {path: weather3, codes: '1063, 1066, 1069'},
        {path: weather4, codes: '1087'},
        {path: weather5, codes: '1114'},
        {path: weather6, codes: '1117, 1255, 1258, 1261, 1264, 1279, 1282, 1276, 1273'},
        {path: weather7, codes: '1135, 1147'},
        {path: weather8, codes: '1150'},
        {path: weather9, codes: '1153'},
        {path: weather10, codes: '1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240, 1243, 1246'},
        {path: weather11, codes: '1198, 1249, 1252'},
        {path: weather12, codes: '1201, 1204, 1207'},
        {path: weather13, codes: '1225, 1210, 1213, 1216, 1219, 1222, 1225, 1237'},
        {path: weather14, codes: '1000'}
    ];
    
    const matchedWeatherImage = weathers.find(x => x.codes.includes(props.code.toString()));

    const weatherImagePath = matchedWeatherImage ? matchedWeatherImage.path : weathers[0].path;

    return <img src={weatherImagePath} width={props.width} />

};

export default WeatherImage;