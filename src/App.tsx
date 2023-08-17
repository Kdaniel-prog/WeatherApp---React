import React, { useEffect, useState } from 'react';

import {Container, Col, Row } from 'react-bootstrap';
import MainWeatherCardProps from './components/MainWeatherCard/MainWeatherCardProps';
import WeatherData from './Data/GetWeatherInformations/WeatherData';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import './App.css';
import { SpecificTimeProps } from './components/TodayForecast/SpecificTimeProps';


function App() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city,setCity] = useState<string>('Budapest');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] =useState(true);

  const tokenKey = '89430708b4e941679bd95125231108';
  let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${tokenKey}&q=${city}&days=1&aqi=no&alerts=no`;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position);
      const pos = `${position.coords.latitude}, ${position.coords.longitude}`;
      setCity(pos);
    })
  }
  

  const fetchData = () =>{
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json)=>{
          const results = json;
          setWeatherData(results);

          console.log(results)
          if(weatherData === null){
              setIsEmpty(false);
          }else{
              setIsEmpty(true);
          }
      })
      .catch((error)=>{
          console.log(error);
    })
    setIsLoading(false);
  }
  useEffect(() => {
    if(isEmpty && !isLoading){
      fetchData();
    }
  }, []);
  
  
  // Extract specific hours at indices 6, 9, 12, 15, 18, and 21
  const specificHours = [6, 9, 12, 15, 18, 21]; 

  const todayDates: SpecificTimeProps[] = specificHours.map(index => {
    const hourForecast = weatherData?.forecast?.forecastday?.[0]?.hour?.[index];
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

  const mainWeatherCardProps: MainWeatherCardProps = {
    name: weatherData?.location?.name ? weatherData?.location?.name : '' ,
    code: weatherData?.current?.condition.code ? weatherData?.current?.condition?.code : 1000,
    country: weatherData?.location?.country ? weatherData?.location?.country : '',
    conditionText: weatherData?.current?.condition.text ? weatherData?.current?.condition?.text : 'Sunny',
    temp: weatherData?.current?.temp_c ? weatherData?.current?.temp_c : 0,
    windKph: weatherData?.current?.wind_kph ? weatherData?.current?.wind_kph : 0,
    windDir: weatherData?.current?.wind_dir ? weatherData?.current?.wind_dir : '',
    windDegree: weatherData?.current?.wind_degree ? weatherData?.current?.wind_degree : 0,
  }

  const handleResult = (result:string) =>{
    if(city !== result){
      setCity(result);
      apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${tokenKey}&q=${result}&days=1&aqi=no&alerts=no`;
      fetchData();
    }
  }

  return (
    <div className="background">
      <Container className="p-3" fluid="md">
        <Row>
          <Col>
            <Navbar />
          </Col>
          <Col xs={10}>
            <MainPage 
              mainWeatherCardProps={mainWeatherCardProps}
              todayForecast={todayDates}
              onResult={handleResult}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
