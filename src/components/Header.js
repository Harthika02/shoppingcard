import {Link ,NavLink} from "react-router-dom"
import Logo from "../assets/logo.jpeg"
export const Header = () => {
  return (
    <div className="header" >
      <Link to="/" className="logo">
      <img src={Logo} alt="shoppingcart logo"/>
      <span > Shopping Card</span>
      </Link>
      <nav className="navigator">
        <NavLink to="/" className="link"active>Home</NavLink>
        <NavLink to="/Cart"className="link" >Cart</NavLink>
      </nav>
      <Link to="/Cart" className="items">
       <span>Cart:2</span>
      </Link>

    </div>
  )
}
