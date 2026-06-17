// rafce
// rfce
import "./App.scss"
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import WeatherCard from "./components/WeatherCard"

const App = () => {
  const inputRef = useRef()

  const [weather, set_weather] = useState([])

  useEffect(() => {
    getWeatherFromLocation()
  }, [])

  const getWeatherFromLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (location) => {
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude

        try {
          const apiKey = "a3f338eb00c448a728f0699e0d07c6a1"
          const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unit=metrics`)
          set_weather([resp.data, ...weather])

        } catch (error) {
          console.error(error)
        }

      });
    }

  }

  const get_weather_from_city_name = async (event) => {
    event.preventDefault()

    if (!inputRef.current.value) {
      return
    }

    try {
      const apiKey = "a3f338eb00c448a728f0699e0d07c6a1"
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&appid=${apiKey}&unit=metrics`)
      set_weather([resp.data, ...weather])

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <h1>Weather App Reactjs</h1>
      <form onSubmit={get_weather_from_city_name}>
        <input type="text" placeholder="enter city name..." ref={inputRef} required />
        <button>Get Weather</button>
      </form>

      {weather.map((singleData, index) => {
        return (
          <WeatherCard key={index} data={singleData} />
        )
      })}
    </>
  )
}

export default App