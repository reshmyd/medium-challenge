import "./MainArticle.scss"

const MainArticle = props => {
  const {articlesArr} = props
  return (
    <div className="grid1__flex">
      <img className="main-article-img" src={articlesArr.image} alt="article" />
      <h2 className="main-article__heading">{articlesArr.title}</h2>
      <p className="main-article__description">{articlesArr.description}</p>
      <div className="main-article-flex">
        <img className="author-img" src={articlesArr.authorPhoto} alt="author" />
        <div>
          <p className="article__author">{articlesArr.author}</p>
          <p className="article__date">{articlesArr.date}</p>
        </div>
      
      </div>
    </div>
  )
}

export default MainArticle