import './Nav.scss';
import Button from '../Button/Button';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__item">
        <a href="#" className="logo">Medium</a>
        <a href="#" className="section">Programming</a>
      </div>
      
      <div className="nav__item">
        <a href="#">Become a member</a>
        <a href="#" className="sign-in">Sign in</a>
        <Button buttonText="Get started" buttonType="primary" />
      </div>
    </nav>
  )
}

export default Nav