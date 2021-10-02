import Card from "./Card"
import './cards.css'

export default function Cards ({cities, onClose}) {
    return (
      <div className="cards">
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
       </div>
    )
}
