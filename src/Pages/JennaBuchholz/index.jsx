import React, { Component } from 'react';
import './JennaBuchholz.css'

import { Header, Section, ProgressBar } from './components'

import { clients } from './data'


class JennaBuchholz extends Component {
    state = { 
        client: clients[0].name,
        pageScroll: 0,
        percentage: 0,
        imageNo: '1 / 2',
        isDark: false

     }


    removeSpaces = (name) => {
        return name.replace(/\s/g, '')
    } 

    sections = []

    handleScroll = (e) => {
        this.handleUpdatePageScrollAndProgressBar()
        this.handleUpdateClientInfo()
        this.handleParallax()
        
        
         
    }

    // * This method handles the state update for the pagescroll distance and progress bar percentage
    handleUpdatePageScrollAndProgressBar = () => {

        // distance from the top of the page
        const pageScroll = window.pageYOffset

        // height of the entire page above and below "the fold"
        const pageHeight = window.document.body.getBoundingClientRect().height

        // total scrollable distance of the page
        const totalScrollableDistance = pageHeight - window.innerHeight 

        // percentage of the total scrollable distance scrolled already
        const percentage = Math.floor(pageScroll / totalScrollableDistance * 100)

        // update values on state object with same name
        this.setState({ pageScroll, percentage })
    }

    // * This method handles the state update for the active client and image/slide number
    handleUpdateClientInfo = () => {

        // distance from the top of the page
        const pageScroll = window.pageYOffset

        // select the sections ref array and do something for each of the sections
        this.sections.forEach(section => {

            // checking to see if the offsetTop of the current section minus 60 is less than or equal to the pageScroll distance
            if (section.offsetTop - 60 <= pageScroll) {

                // if the above check is true, set state.client to the current section tag's data-client attribute and state.imageNo to the section tag's data-page attribute
                this.setState(
                    {
                        client: section.getAttribute('data-client'),
                        imageNo: section.getAttribute('data-page')
                    }
                )
               
                // this ternary expression is checking for a "true" data-is-dark string on the current section. If its true it updates state.isDark to true, if not it sets state.isDark to false.
                section.getAttribute('data-is-dark') === "true" ? this.setState({isDark: true}) : this.setState({isDark: false})
                
               
            }
            

        })
    }
    
    
    // TODO: When the page scrolls, make things parallax
    // TODO: Want to move certain tags, based on how far they are from an anchor point
    // TODO: What is the anchor? Well, its the middle of the section
    // TODO: How far should it parallax? Well, its a ratio of the middle distance scrolled to the middle point of the anchor
    handleParallax = () => {
        // this is the distance from the top
        const viewportTop = window.pageYOffset
        
        // this is the topViewport plus half the height of the page
        const viewportMid = viewportTop + (window.innerHeight / 2)

        // select the sections ref array and do something for each of the sections
        this.sections.forEach(section => {

            // top of each section
            const sectionTop = section.offsetTop

            // midpoint of each section
            const sectionMid = sectionTop + (section.offsetHeight / 2)

            // distance from the section to the viewportMid
            const distanceToSection = viewportMid - sectionMid

            // select the square tag
            const squareTag = section.querySelector('div.JB-square')

            // select the data-parallax of the tag
            const squareSpeed = parseFloat(squareTag.getAttribute('data-parallax'))

            squareTag.style.transform = `translate(0, ${distanceToSection * squareSpeed}px)`
        })
       
    }

    componentDidMount() {
     window.addEventListener('scroll', this.handleScroll)
     
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() { 

        
        return ( 
        <div className="jenna-buchholz--wrapper">
            <ProgressBar percentage={this.state.percentage} isDark={this.state.isDark}/>
            <Header {...this.state}/>
           {clients.map((client, clientIdx) => {
              let {name, backgroundColor, photo, square, circle, parallaxCircle, parallaxSquare } = client
              let c = this.removeSpaces(name)
            return (
                <Section 
                key={clientIdx}
                client={name}
                c={c}
                backgroundColor={backgroundColor} 
                photo={photo}
                imageNo={clientIdx + 1}
                circle={circle}
                square={square}
                ref={(ref) => {this.sections[clientIdx] = ref}}
                parallaxCircle={parallaxCircle}
                parallaxSquare={parallaxSquare}
                />
            )
           })}
        </div>
         );
    }
}
 
export default JennaBuchholz;