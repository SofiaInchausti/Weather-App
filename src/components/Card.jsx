import {Link} from 'react-router-dom'
import React from 'react';
import './card.css'


export default function Card({min, max, name, img, onClose, id}) {
 
   return (
    <div>
        <div className="card" >
            <div className="d-flex flex-column">
              <button  onClick={onClose} type="button" className="btn btn-info button">X</button>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
              alt="..." className='cardImg' />
              </div>     
            <div className="card-body">
            <Link to={`/ciudad/${id}`}>
            <h4 className="card-title text-white">{name}</h4>
            </Link>
            <div className="row card-text text-white">
            <div className="col-xs-6 p-3">
            <h6 className="card-title text-white">Min</h6>
            <p>{min}°</p>
            </div>
          <div className="col-xs-6 p-3">
            <h6 className="card-title text-white">Max</h6>
            <p >{max}°</p>
          </div>
        </div>    
      </div>
    </div>
  </div>  
  )
};


