import React from 'react'
import './Header.css'

const Header = ({ clients, pageScroll }) => {
    return ( 
        <header className="JB-header">
            <h1>Jenna Buchholz Photography</h1>
            <h2 className="JB-client">{clients[0].name}</h2>
            <h2 className="JB-page">1 / 2</h2>
            <h2 className="JB-pixels">{pageScroll}</h2>
        </header>
     );
}
 
export default Header;