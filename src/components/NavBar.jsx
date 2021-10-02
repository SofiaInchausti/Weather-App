import React from 'react';
import SearchBar from './SearchBar.jsx';
import {Link} from "react-router-dom"

export default function NavBar({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">
        <img src="/icon-weather.png" alt="weather-icon" width="30" height="24" className="d-inline-block align-text-top"/>
          Weather App
        </span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

