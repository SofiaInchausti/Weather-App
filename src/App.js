import React, { useState } from 'react';
import {Route} from "react-router-dom"
import './App.css';
import Cards from '../src/components/Cards.jsx';
import City from './components/City'
import NavBar from './components/NavBar';
require('dotenv').config();


export default function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(city) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          console.log(recurso.main,'recurso')
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("City not found");
        }
      });
    }
    function onFilter(cityId) {
      let city = cities.filter(c => c.id === parseInt(cityId));
      if(city.length > 0) {
          return city[0];
      } else {
          return null;
      }
    }
    return (
      <div>
        <Route
        exact path="/"
        render={()=> <NavBar onSearch={onSearch}/>}
        />        
        <Route
        exact path="/"
        render={()=> <Cards cities={cities} onClose={onClose}/>}
        />
        <Route
        exact path='/ciudad/:cityId'
        render={({match}) => <City city= {onFilter(match.params.cityId)}/>}
         />
      </div>
  );
}








