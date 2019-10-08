import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return ( 
        <nav className="PL-nav">
           <Link to="/plant-life">Home</Link>
           <Link to="/plant-life/shop">Shop</Link>
           <Link to="/plant-life/about" >About</Link>
           <Link to="/plant-life/help" >Help</Link>
           <Link to="/plant-life/blog" >Blog</Link>
           <br />
           <Link className="PL-back" to="/" >JS For Designers</Link>
        </nav>
     );
}
 
export default Nav;