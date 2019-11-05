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
        
    

        
        
        
    }

    handleUpdatePageScrollAndProgressBar = () => {
        const pageScroll = window.pageYOffset
        const pageHeight = window.document.body.getBoundingClientRect().height
        const totalScrollableDistance = pageHeight - window.innerHeight 
        const percentage = Math.floor(pageScroll / totalScrollableDistance * 100)

      
        this.setState({ pageScroll, percentage })
    }

    handleUpdateClientInfo = () => {
        const pageScroll = window.pageYOffset
        this.sections.forEach(section => {
            if (section.offsetTop - 60 <= pageScroll) {
                this.setState(
                    {
                        client: section.getAttribute('data-client'),
                        imageNo: section.getAttribute('data-page')
                    }
                )
               
                
                section.getAttribute('data-is-dark') === "true" ? this.setState({isDark: true}) : this.setState({isDark: false})
                
               
            }
            

        })
    }

    handleParallax = () => {
        // TODO: When the page scrolls, make things parallax
        // this is the distance from the top
        const topViewport = window.pageYOffset
        // TODO: Want to move certain tags, based on how far they are from an anchor point
        // TODO: What is the anchor? Well, its the middle of the section
        // TODO: How far should it parallax? Well, its a ratio of the middle distance scrolled to the middle point of the anchor
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
              let {name, backgroundColor, photo, square, circle } = client
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
                />
            )
           })}
        </div>
         );
    }
}
 
export default JennaBuchholz;