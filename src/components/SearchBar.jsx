import React, { useState } from "react";

export default function SearchBar({onSearch}){
    const [city, setCity] = useState("");
    return(
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <form onSubmit={(e)=> {
            e.preventDefault()
             onSearch(city)}}
              className="d-flex">
            <input 
            className="form-control me-2"
             type="text"
             placeholder="City"
             aria-label="Search"
             value={city}
             onChange={e=>setCity(e.target.value)}
             />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
        </div>  
        </nav>

    )
}

