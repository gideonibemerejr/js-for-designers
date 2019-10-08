import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import "./PlantLife-Home.css"

class Home extends Component {
    state = {
        //  keep track of the slide zero indexed
        currentSlide: 0,

        // keep track of the z-index of the slides (first-child is initialized at z-index: 1;)
        z: 1,

        // dynamically create img jsx tags below such that a ref for each tag is created simultaneously 
        imageUrls: [
            './assets/plant-life/plant1.jpg',
            './assets/plant-life/plant2.jpg',
            './assets/plant-life/plant3.jpg',
            './assets/plant-life/plant4.jpg',
            './assets/plant-life/plant5.jpg'
        ]
    }
    
    
    // When the div.PL-home--slides is clicked this function runs
    handleSlideClick = () => {
        // when an image is clicked increase the currentSlide by 1
        let currentSlide = this.state.currentSlide + 1

        // if currentSlide is greater than the total number of slides, make it equal to 0 
        if (currentSlide > this.state.imageUrls.length - 1) {
            currentSlide = 0;
        }

        // when an image is clicked increase the z-index by 1
        let z = this.state.z + 1
        
        
        // removes the animation from the style for EVERY IMAGE
        this.images.forEach(image => {
            image.style.animation = ''
        })

        // sets state to the increased values of currentSlide and z (index)
        this.setState({currentSlide, z })
        

        // * Pick the right image

        //sets the z-index to the current slide such that it is higher than the previous
        this.images[currentSlide].style.zIndex = z

        // adds the keyframes fade animation to the currently visibile slide such that it nicely fades in
        this.images[currentSlide].style.animation = "fade 0.5s"

      
        
    }

    // When the mouse goes over the div.PL-home--slides area this function fires
    handleSlideMouseOver = () => {
        this.images.forEach(image => {
            const x = 25 * (Math.floor(Math.random() * 5)) - 50
            const y = 25 * (Math.floor(Math.random() * 5)) - 50

            image.style.transform = `translate(${x}px, ${y}px)`
        })
    }

    // When the mouse goes out of the div.PL-home--slides area this function fires
    handleSlideMouseOut = () => {
        this.images.forEach(image => {
            image.style.transform = ''
        })
    }

    componentDidMount() {
        // destructoring props for ease of use
        const {menuIsOpen, handleMenuClick} = this.props;

        // if this.state.menuIsOpen = true, fire handleMenuClick which sets this.state.menuIsOpen to !this.state.menuIsOpen otherwise return (aka do nothing)
        if (menuIsOpen) {
            handleMenuClick()
        } else {
         return 
        }
    }

    // initializes a variable "images" to an empty array. This is the variable that holds the reference to the img tags in the slide show
    images = []

    render() { 
        return (  
        <section className='PL-home'>
            <div onMouseOut={this.handleSlideMouseOut} onMouseOver={this.handleSlideMouseOver} onClick={this.handleSlideClick} className="PL-home--slides">
                {this.state.imageUrls.map((image, idx) => (

                <img key={idx} src={`${image}`} ref={(ref) => {this.images[idx] = ref}} alt=""/>
                ))}
            
            </div>
            <div className="PL-home--content">
               <h1>Plant set</h1>
               <p>
               This beginner plant set, containing 6 succulents, 3 cacti and 2 trees is aimed at sprucing up your apartment. It’s suitable for places with both bright and low access to sunlight. Each plant comes with it’s own perfect plant bot.
               </p>
               <Link to="/plant-life/shop" className="PL-button">Buy for $599</Link>
            </div>
        </section>
        );
    }
}
 
export default Home;
