import React, {useEffect} from 'react'
import plant1 from '../../assets/plant1.jpg'
import plant1_2x from '../../assets/plant1-2x.jpg'

const Home = (props) => {
    const {menuIsOpen, handleMenuClick} = props;
    useEffect(() => {
        if (menuIsOpen) {
            handleMenuClick()
        } else {
         return 
        }
    }, [])
    return ( 
        <section className='PL-Home'>
            <img src={plant1} srcSet={`${plant1}, ${plant1_2x}`} alt=""/>
        </section>
     );
}
 
export default Home;