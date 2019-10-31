import React, { Component } from 'react';
import './JennaBuchholz.css'

import { Header, Section, ProgressBar } from './components'

import { clients } from './data'


class JennaBuchholz extends Component {
    state = { 
        client: clients[0].name,
        pageScroll: 0,
        percentage: 0,
        imageNo: '1 / 2'

     }


    removeSpaces = (name) => {
        return name.replace(/\s/g, '')
    } 
    sections = []

    handleScroll = (e) => {
        let pageScroll = window.pageYOffset
        const pageHeight = window.document.body.getBoundingClientRect().height
        const totalScrollableDistance = pageHeight - window.innerHeight 
        const percentage = Math.floor(pageScroll / totalScrollableDistance * 100)

      
        this.setState({ pageScroll, percentage })

        this.sections.forEach(section => {
            if (section.offsetTop - 60 <= pageScroll) {
                this.setState(
                    {
                        client: section.getAttribute('data-client'),
                        imageNo: section.getAttribute('data-page')
                    }
                )
            }
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
            <ProgressBar percentage={this.state.percentage} />
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