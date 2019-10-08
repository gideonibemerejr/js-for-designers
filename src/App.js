import React from 'react';


import {Circle} from './Components'
import data from './data'
import './App.css';

function App() {
  console.log(data)
  return (
    <>
      <header className="App-header">
        <nav className="App-navbar">
          
          <ul className="App-nav">
          <a href="/"  className="App-link">JS for Designers</a>
            <li>
              <a className="App-link" href="#Projects">Projects</a> 
            </li>
  
            
          </ul>
          <a href="https://www.gideonjr.com"><Circle /></a>
        </nav>
      
        <section className="App-header--content">
          <article className="App-header--text">
            <h1>
            Javascript for Designers
            </h1>
            <blockquote cite="https://www.superhi.com/courses/javascript-for-designers">

            <p>
            "Javascript is one of the most used languages in the world but its learning curve is relatively steep." 
            </p> 
            <footer>–SuperHi, <cite>Javascript for Designers</cite></footer>
            </blockquote>
        
            <p>
          
            In a short course by <a className="App-link" href="https://www.superhi.com">SuperHi</a>, I learned how to work with Javascript in a creative, fun way aimed at people who design.
            
            </p>
          </article>
         
        </section>
        <section className="App-header-arrow">
          <a href="#Projects"><img src="./assets/chevron-down.svg" alt="Chevron Down"/></a>
        </section>
      </header>
      <main id="Projects" className="App-projects-list">
        <div  className="App-section-heading">
        <h2>Projects</h2>
        <p>These projects were completed with <a className="App-link" href="https://www.superhi.com"><i>SuperHi</i></a></p>
        </div>
        {
          data.map((project, idx) => (
          <section className="App-project-card">
            <div className="App-project-card--text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="App-project-card--item">
              <img className="App-project-card--image" src={`${project.image}`} alt="Plant Life Project Screenshot"/>
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
    </>
  );
}

export default App;
