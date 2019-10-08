import React from 'react'
import {Link} from 'react-router-dom'
import { Circle } from '../../Components'
import data from './data'
import './HomePage.css';

const HomePage = () => {
    return ( 
      <div className="HomePage">
        <header className="HomePage-header">
          <nav className="HomePage-navbar">
            
            <ul className="HomePage-nav">
              <li>
              
              <a  href="/"  className="HomePage-link">JS for Designers</a>
              </li> 
              <li>
                <a className="HomePage-link" href="#Projects">Projects</a> 
              </li>
    
              
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gideonjr.com"><Circle /></a>
          </nav>
        
          <section className="HomePage-header--content">
            <article className="HomePage-header--text">
              <h1>
              Javascript for Designers
              </h1>
              <p>
            
              In a short course by <a className="HomePage-link" target="_blank" rel="noopener noreferrer" href="https://www.superhi.com"><i>SuperHi</i></a>, I learned how to work with Javascript in a creative, fun way aimed at people who design. Then, I used <a className="HomePage-link" target="_blank" rel="noopener noreferrer" href="https://www.reactjs.org"><i>React</i></a> to implement extra features outside of the SuperHi scope.
              
              </p>
              <blockquote cite="https://www.superhi.com/courses/javascript-for-designers">

              <p>
              Javascript is one of the most used languages in the world but its learning curve is relatively steep. 
              </p> 
              <footer>–SuperHi, <cite>Javascript for Designers</cite></footer>
              </blockquote>
            </article>
          
          </section>
          <section className="HomePage-header-arrow">
            <a  href="#Projects"><img src="./assets/chevron-down.svg" alt="Chevron Down"/></a>
          </section>
        </header>
        <main id="Projects" className="HomePage-projects-list">
          <div  className="HomePage-section-heading">
          <h2>Projects</h2>
          <p>These projects were completed with <a className="HomePage-link" target="_blank" rel="noopener noreferrer" href="https://www.superhi.com"><i>SuperHi</i></a>'s <a className="HomePage-link" target="_blank" rel="noopener noreferrer" href="https://www.superhi.com/courses/javascript-for-designers"><i>Javascript for Designers</i></a> course and extended using React. Checkout the Github repository for this entire project <a className="HomePage-link" target="_blank" rel="noopener noreferrer" href="https://github.com/gideonibemerejr/js-for-designers"><i>here</i></a>.</p>
          </div>
          {
            data.map((project, idx) => (
          
              <section key={idx} className="HomePage-project-card">
                <div className="HomePage-project-card--text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div>
                  <Link className="HomePage-link" to={project.link}>See Project</Link>
                  </div>
                </div>
                <div className="HomePage-project-card--item">
                  <img className="HomePage-project-card--image" src={`${project.image}`} alt="Plant Life Project Screenshot"/>
                </div>
              </section>
          
            ))
          }
            
          
          </main>
          {/* <footer>
            <section>
              <h4>
                Credits
              </h4>
              <p>Hero illustration courtesy of SuperHi, colors updated by Gideon Ibemere, Jr</p>
            </section>
          </footer> */}
    </div>
     );
}
 
export default HomePage
