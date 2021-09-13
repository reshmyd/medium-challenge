import "./Cards.scss"


const Cards = props => {
  const {cardsArr} = props
  const cardsJsx = cardsArr.map((elem, index) => (
    <article className="cards-grid" key={index}>
      <div className="cards">
        <h3 className="cards__heading">{elem.title}</h3>
        <p className="cards__date">{elem.time}</p>
      </div>
      <img className="cards-img" src={elem.image} alt="card" />
    </article>
  ))
  
  return (
    <>
    {cardsJsx}
    </>
  )
}

export default Cards