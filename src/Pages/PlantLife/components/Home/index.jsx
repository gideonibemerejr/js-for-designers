import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import plant1 from '../../assets/plant1.jpg'
import plant1_2x from '../../assets/plant1-2x.jpg'

import "./PlantLife-Home.css"

const Home = (props) => {
    const {menuIsOpen, handleMenuClick} = props;
    useEffect(() => {
        
        if (menuIsOpen) {
            handleMenuClick()
        } else {
         return 
        }
        // eslint-disable-next-line
    }, [])
    return ( 
        <section className='PL-home'>
            <div className="PL-home--slides">
            {/* <img src={plant1} srcSet={`${plant1}, ${plant1_2x}`} alt=""/> */}
                images
            </div>
            <div className="PL-home--content">
               <h1>Plant set</h1>
               <p>
               This beginner plant set, containing 6 succulents, 3 cacti and 2 trees is aimed at sprucing up your apartment. It’s suitable for places with both bright and low access to sunlight. Each plant comes with it’s own perfect plant bot.
               </p>
               <Link to="/plant-life/shop" class="PL-button">Buy for $599</Link>
            </div>
        </section>
     );
}
 
export default Home;