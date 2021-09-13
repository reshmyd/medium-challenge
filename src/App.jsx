import './App.scss';

import articles from "./assets/data/articles.js";
import cards from "./assets/data/cards.js";

import Button from "./components/Button/Button.jsx"
import Nav from "./components/Nav/Nav.jsx"
import Article from "./components/Article/Article.jsx"
import MainArticle from './components/MainArticle/MainArticle';
import Cards from "./components/Cards/Cards.jsx"
import Featured from './components/Featured/Featured';

function App() {
  const mainArticle = articles[0];
  const articlesArr = articles.slice(1, 4)
  const continuationArticlesArr = articles.slice(4)
  
  const mainCardsArr = cards.slice(0,3)
  const cardsArr = cards.slice(3)
  const featured = articles[1]
  
  return (
    <main>
      <Nav />
      <div className="container">
        
        <div className="grid1">
          <MainArticle articlesArr={mainArticle} /> 
          <h3>LATEST</h3>
          <hr />
          <Article articlesArr={articlesArr} />
          <Featured author={featured} cardsArr={mainCardsArr}/>
          <Article articlesArr={continuationArticlesArr} />
        </div>
      
      <div className="grid2">
        
        <div className="card1">
          <h4 className="card1__heading">Programming<p className="card1__subheading">The good, the bad, the buggy.</p></h4>
          <Button buttonText="Follow" buttonType="secondary" />
           <p>
            Follow to see more stories about Programming on your homepage and in your Medium Daily Digest
          </p> 
        </div>
      
        <div className="card2">
          <h3>RELATED TOPICS</h3>
          <hr />
          <p>JAVASCRIPT</p>
          <p>SOFTWARE ENGINEERING</p>
          <p>DATA SCIENCE</p>
          <p>UX</p>
          <p>MATH</p>
        </div>
      
        <div className="card3">
          <h3>POPULAR IN PROGRAMMING</h3>
          <hr />
          <Cards cardsArr={cardsArr} />
        </div>  
        
      </div>
    </div>
  </main>
  );
}

export default App;
