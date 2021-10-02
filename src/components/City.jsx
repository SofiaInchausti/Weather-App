import React from "react";
import './city.css'

export default function City({city}) {
    return (
        <div className="city">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}