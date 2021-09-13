import "./Article.scss"

const Article = props => {
  const {articlesArr} = props
  const articleJsx = articlesArr.map((elem, index) =>(
    <article key={index}>
      <div className="article">
        <h3 className="article__heading">{elem.title}</h3>
        <p className="article__description">{elem.description}</p>
        <p className="article__author">{elem.author}</p>
        <p className="article__date">{elem.date}</p>
      </div>
      <img className="article-img" src={elem.image} alt="article" />
    </article>
  ))
  return (
    <div className="grid1__grid">
      {articleJsx}
    </div>
  )
}

export default Article