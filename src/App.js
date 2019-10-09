import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {HomePage, PlantLife, TypeChecker, JennaBuchholz, Brux, WordsOfWomxn} from './Pages'



function App() {
 
  return (
    <Router>
      <Switch>
        {/* Route to Home Page: "JS for Designers" */}
        <Route exact path="/" component={HomePage} />

        {/* Route to Plant Life Page */}
        <Route 
        path="/plant-life" 
        component={PlantLife} 
        /> 


        {/* Route to Type Checker Page */}
        <Route 
        exact path="/type-checker" 
        component={TypeChecker} 
        /> 

        {/* Route to Jenna Buchholz Page */}
        <Route 
        exact path="/jenna-buchholz" 
        component={JennaBuchholz} 
        />

        {/* Route to Brux Page */}
        <Route 
        exact path="/brux" 
        component={Brux} 
        />

        {/* Route to Words of Womxn Page */}
        <Route 
        exact path="/words-of-womxn" 
        component={WordsOfWomxn} 
        />
      </Switch>
    </Router>
    
  );
}

export default App;
