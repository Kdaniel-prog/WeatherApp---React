import React, { useEffect, useState, useCallback } from "react";

import { Container, Col, Row } from "react-bootstrap";
import WeatherData from "./api/apiWeatherProps//WeatherData";
import TOKEN from "./api/apiWeatherProps/Token";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [apiUrl, setApiUrl] = useState(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=1&aqi=no&alerts=no`);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      weatherData === null ? setIsEmpty(false) : setIsEmpty(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  },[apiUrl])

  useEffect(() =>{
      fetchData();
  }, [apiUrl, fetchData]);
 
  const handleResult = (city: string) => {
    setApiUrl(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=${city}&days=1&aqi=no&alerts=no`);
  };

  return (
    <div className="background">
      <Container className="p-3" fluid="md">
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
    </div>
  );
}

export default App;
