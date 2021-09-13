import './Featured.scss';
import Button from '../Button/Button'

const Featured = ({author, cardsArr}) => {
  const cardsJsx = cardsArr.map((elem, index) => (
    <article className="cards-grid" key={index}>
      <img className="cards-img" src={elem.image} alt="card" />
      <div className="cards">
        <h4 className="cards__heading">{elem.title}</h4>
        <p className="cards__date">{elem.time}</p>
      </div>
    </article>
  ))

  return (
    <div className="featured">
      <h2>FEATURED WRITER</h2>
      <div className="grid">
      <div className="author-photo">
        <img src={author.authorPhoto} alt="featured author" />
        <Button buttonText="Follow" buttonType="tertiary" />
      </div>
      <div>
        <h2>{author.author}</h2>
        <p>Teacher, coder, long-ago Microsoft MVP. Author of heavy books. Join Young Coder for a creative take on science and technology.</p>
      </div>
      <div>
        {cardsJsx}
      </div>
      </div>
    </div>

  )
}

export default Featured