import React, { Component } from 'react';
import './JennaBuchholz.css'

import { Header, Section } from './components'

import { clients } from './data'

class JennaBuchholz extends Component {
    state = { 
        clients,
        pageScroll: 0,

     }


    removeSpaces = (name) => {
        return name.replace(/\s/g, '')
    } 

    handleScroll = (e) => {
        
        console.log('Scrolling')
    }

    // componentDidMount() {
    //     document.addEventListener('scroll', this.handleScroll)
    // }
    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.handleScroll)
    // }
    render() { 
        return ( 
        <div onScroll={this.handleScroll.bind(this)} className="jenna-buchholz--wrapper">
            <Header {...this.state}/>
           {clients.map((client) => {
               let { name, backgroundColors, circle, square } = client
               name = this.removeSpaces(name)
               return (
                   client.photos.map((photo, idx) => (
                       <Section imageNo={idx + 1} key={photo} circle={circle[idx]} square={square[idx]} backgroundColor={backgroundColors[idx]} client={name} photo={photo}/>
                   ))
               )
           })}
        </div>
         );
    }
}
 
export default JennaBuchholz;