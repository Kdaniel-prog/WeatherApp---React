import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainWeatherCardProps from './components/MainWeatherCard/MainWeatherCardProps';
import WeatherData from './dataTypes/WeatherData'
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import './App.css';


function App() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const city = 'Szolnok'
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
  
  const mainWeatherData: MainWeatherCardProps  = {
    name: weatherData?.location.name ? weatherData?.location.name : '' ,
    code: weatherData?.current.condition.code ? weatherData?.current.condition.code : 1000,
    country: weatherData?.location.country ? weatherData?.location.country : '',
    conditionText: weatherData?.current.condition.text ? weatherData?.current.condition.text : 'Sunny',
    temp: weatherData?.current.temp_c ? weatherData?.current.temp_c : 0,
    windKph: weatherData?.current.wind_kph ? weatherData?.current.wind_kph : 0,
    windDir: weatherData?.current.wind_dir ? weatherData?.current.wind_dir : '',
    windDegree: weatherData?.current.wind_degree ? weatherData?.current.wind_degree : 0,
  }
  console.log(mainWeatherData);
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
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
