import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {HomePage, PlantLife} from './Pages'



function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        
        <Route 
          path="/plant-life" 
          component={PlantLife} 
          /> 
       
        {/* 
        <Route 
        exact path="/type-checker" 
        component={TypeChecker} 
        /> 
        */}
        {/* <Route 
        exact path="/plant-life" 
        component={PlantLife} 
        /> */}
        {/* <Route 
        exact path="/plant-life" 
        component={PlantLife} 
        /> */}
        {/* <Route 
        exact path="/plant-life" 
        component={PlantLife} 
        /> */}
      </Switch>
    </Router>
    
  );
}

export default App;
