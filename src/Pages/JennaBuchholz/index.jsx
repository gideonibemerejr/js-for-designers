import React, { Component } from 'react';
import './JennaBuchholz.css'

import { Header, Section } from './components'

import { clients } from './data'

class JennaBuchholz extends Component {
    state = { 
        clients,
     }

    render() { 
        return ( 
        <div className="jenna-buchholz--wrapper">
            <Header {...this.state}/>
           {clients.map((client) => {
               const { name, backgroundColors, circle, square } = client
               return (
                   client.photos.map((photo, idx) => (
                       <Section key={idx} circle={circle[idx]} square={square[idx]} backgroundColor={backgroundColors[idx]} client={name} photo={photo}/>
                   ))
               )
           })}
        </div>
         );
    }
}
 
export default JennaBuchholz;