import React from 'react'
import './Header.css'

const Header = ({ client, pageScroll, imageNo, isDark }) => {
    return ( 
        <header className={isDark ? 'JB-header white' : 'JB-header'}>
            <h1>Jenna Buchholz Photography</h1>
            <h2 className="JB-client">{client}</h2>
            <h2 className="JB-page">{imageNo}</h2>
            <h2 className="JB-pixels">{pageScroll}</h2>
        </header>
     );
}
 
export default Header;