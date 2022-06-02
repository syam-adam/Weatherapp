import React,{useState} from 'react'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")
  const changeHandler = e => {
    setCity(e.target.value);
  }
  const getweather = (event) => {
  
    if(event.key == "Enter"){
      console.log("hello");
      console.log(city);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=***`).then(
        response => response.json()
      ).then(
        data=>{
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }
  return (
    <div className='container'>
      <input 
        className='input'
        value={city}
        placeholder='Enter city...' 
        onChange={changeHandler}  
        onKeyPress={getweather}
       />

        {typeof weatherData.main === 'undefined' ? (
         <div>
           <p>Welcome to Weather App!!!!</p>
          </div>
        ):(
         <div className='weather-data'>
           <p className='city'><b>City</b> : {weatherData.name}</p>
           <p className='temp'>Temp : {Math.round(weatherData.main.temp)}°C</p>
           <p className='weather'><b>Weather</b> : {weatherData.weather[0].main}</p>
          </div>
        )}
        {weatherData.cod === "404" ? (
          <p>City not found</p>
        ):(
          <>
          </>
        )}
    </div>
  )
}

export default App
