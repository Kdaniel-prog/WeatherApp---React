import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainWeatherCardProps from './components/MainPage/MainPageProps';
import WeatherData from './Data/GetWeatherInformations/WeatherData';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import './App.css';
import { SpecificTimeProps } from './components/TodayForecast/SpecificTimeProps';


function App() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const city = 'Budapest'
  const tokenKey = '29823e80a5df4bda9ed92553230808';
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${tokenKey}&q=${city}&days=1&aqi=no&alerts=no`;

  useEffect(() => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Assuming the API response structure matches the WeatherData interface
          setWeatherData(data);
          console.log(JSON.parse(JSON.stringify(weatherData)));
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }, []);
  
  // Extract specific hours at indices 6, 9, 12, 15, 18, and 21
  const specificHours = [6, 9, 12, 15, 18, 21]; 

  const todayDates: SpecificTimeProps[] = specificHours.map(index => {
    const hourForecast = weatherData?.forecast.forecastday[0].hour[index];
    if (hourForecast) {
      const specHour: SpecificTimeProps = {
        time: new Date(hourForecast.time),
        temp_c: hourForecast.temp_c,
        code: hourForecast.condition.code
      };
      return specHour;
    } else {
      const specHour: SpecificTimeProps = {
        time: new Date(),
        temp_c: 0,
        code: 0,
      };
      return specHour;
  }});

  console.log(JSON.parse(JSON.stringify(todayDates)));

  const mainWeatherData: MainWeatherCardProps  = {
    name: weatherData?.location.name ? weatherData?.location.name : '' ,
    code: weatherData?.current.condition.code ? weatherData?.current.condition.code : 1000,
    country: weatherData?.location.country ? weatherData?.location.country : '',
    conditionText: weatherData?.current.condition.text ? weatherData?.current.condition.text : 'Sunny',
    temp: weatherData?.current.temp_c ? weatherData?.current.temp_c : 0,
    windKph: weatherData?.current.wind_kph ? weatherData?.current.wind_kph : 0,
    windDir: weatherData?.current.wind_dir ? weatherData?.current.wind_dir : '',
    windDegree: weatherData?.current.wind_degree ? weatherData?.current.wind_degree : 0,
    times: todayDates
  }


  return (
    <div className="background">
      <Container className="p-4" fluid="md" gap={3}>
        <Row>
          <Col>
            <Navbar />
          </Col>
          <Col xs={10}>
            <MainPage 
              name={mainWeatherData.name}
              code={mainWeatherData.code}
              country={mainWeatherData.country}
              conditionText={mainWeatherData.conditionText}
              temp={mainWeatherData.temp}
              windKph={mainWeatherData.windKph}
              windDir={mainWeatherData.windDir}
              windDegree={mainWeatherData.windDegree}
              times={mainWeatherData.times}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
