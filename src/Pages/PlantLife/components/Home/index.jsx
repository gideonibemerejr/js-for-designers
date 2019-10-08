import React from 'react'
import plant1 from '../../assets/plant1.jpg'
import plant1_2x from '../../assets/plant1-2x.jpg'

const Home = () => {
    return ( 
        <section>
            <img src={plant1} srcSet={`${plant1}, ${plant1_2x}`} alt=""/>
        </section>
     );
}
 
export default Home;