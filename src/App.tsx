import React, { useEffect, useState, useCallback } from "react";

import { Container, Col, Row } from "react-bootstrap";
import WeatherData from "./api/apiWeatherProps//WeatherData";
import TOKEN from "./api/apiWeatherProps/Token";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import CitiesProps from "./components/SearchBar/CitiesProps";
import classes from "./App.module.css";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [apiUrl, setApiUrl] = useState(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=1&aqi=no&alerts=no`);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(apiUrl,{
        method: "get",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }})
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error)
    }
  },[apiUrl])

  useEffect(() =>{
      fetchData(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=1&aqi=no&alerts=no`);
  }, [apiUrl, fetchData]);
 
  const handleResult = (city: CitiesProps) => {
    setApiUrl(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=${city.lat},${city.lon}&days=1&aqi=no&alerts=no`);
  };

  return (
    <Container className={`p-3 ${classes.text}`} fluid="md">
      <Row>
        <Col>
          <Navbar />
        </Col>
        <Col xs={10}>
          <MainPage
            weatherData={weatherData}
            onResult={handleResult}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
