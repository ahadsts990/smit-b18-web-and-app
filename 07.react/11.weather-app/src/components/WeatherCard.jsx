import React from 'react'
import moment from "moment"
import "./index.scss"

const WeatherCard = ({ data }) => {
    return (
        <div className='weather-card'>
            <h3>Temperature: {(data.list[0].main.temp - 273.15).toFixed(2)} °C</h3>
            <h4>City: {data.city.name}</h4>
            <h5>Country: {data.city.country}</h5>
            <p>Sunrise: {moment(data.city.sunrise).format("HH: MM a")}</p>
            <p>Sunset: {moment(data.city.sunset).format("HH: MM a")}</p>

            <p>Temperature Max: {(data.list[0].main.temp_max - 273.15).toFixed(2)} °C</p>
            <p>Temperature Min: {(data.list[0].main.temp_min - 273.15).toFixed(2)} °C</p>
            <p>Feels Like: {(data.list[0].main.feels_like - 273.15).toFixed(2)} °C</p>

        </div>
    )
}

export default WeatherCard