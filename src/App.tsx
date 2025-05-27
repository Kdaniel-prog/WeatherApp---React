import { useEffect, useState, useCallback } from "react";

import WeatherData from "./api/apiWeatherProps//WeatherData";
import TOKEN from "./api/config";
import MainPage from "./pages/MainPage/MainPage";
import CitiesProps from "./components/SearchBar/CitiesProps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import RootLayout from "./pages/RootLayout/RootLayout";
import LoadingSpinner from "./components/UI/Loading/LoadingSpinner";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [apiUrl, setApiUrl] = useState(`https://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=Budapest&days=7&aqi=no&alerts=no`);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl,{
        method: "get",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } 
      })
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(JSON.parse(JSON.stringify(data)));
      setWeatherData(data);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  },[apiUrl])

  useEffect(() =>{
      fetchData();
  }, [apiUrl, fetchData]);
 
  const handleResult = (city: CitiesProps) => {
    setApiUrl(`https://api.weatherapi.com/v1/forecast.json?key=${TOKEN}&q=${city.lat},${city.lon}&days=7&aqi=no&alerts=no`);
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return <RouterProvider router={router} />

}

export default App;
