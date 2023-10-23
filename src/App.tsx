import React, { useEffect, useState, useCallback } from "react";

import WeatherData from "./api/apiWeatherProps//WeatherData";
import TOKEN from "./api/apiWeatherProps/Token";
import MainPage from "./pages/MainPage/MainPage";
import CitiesProps from "./components/SearchBar/CitiesProps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import RootLayout from "./pages/RootLayout/RootLayout";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [apiUrl, setApiUrl] = useState(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=7&aqi=no&alerts=no`);

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
      console.log(JSON.parse(JSON.stringify(data)));
    } catch (error) {
      console.log(error)
    }
  },[apiUrl])

  useEffect(() =>{
      fetchData(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=7&aqi=no&alerts=no`);
  }, [apiUrl, fetchData]);
 
  const handleResult = (city: CitiesProps) => {
    setApiUrl(`http://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=${city.lat},${city.lon}&days=7&aqi=no&alerts=no`);
  };

  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <RootLayout onSendResult={handleResult} />, 
      children:[
        { path: '/', element: <MainPage weatherData={weatherData} onResult={handleResult} />},
        { path: '/forecast', element: <ForecastPage weatherData={weatherData}/> }
      ],
    }
  ]);

  return <RouterProvider router={router} />

}

export default App;
