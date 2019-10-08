import React from 'react';
import data from './data'
import './App.css';

function App() {
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-navbar">
          <a href="/" className="App-link" >JS for Designers</a>
          <ul className="App-nav">
            <li>About</li>
            <li>Projects</li>
            
          </ul>
        </nav>
        
      </header>
      <main className="App-projects-list">

        
          <section className="App-project-card">
            <div className="App-project-card--text">
              <h2>Plant Life</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod facilis voluptates vitae exercitationem esse nobis. Aut quaerat distinctio ipsum?</p>
            </div>
            <figure className="App-project-card--item">
              {/* <img className="App-project-card--image" src={} alt="Plant Life Project Screenshot"/> */}
            </figure>
          </section>
         
        </main>
    </div>
  );
}

export default App;
