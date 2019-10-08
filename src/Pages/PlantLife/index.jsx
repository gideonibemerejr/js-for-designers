import React, { Component } from 'react';
import {  Route, Link, Switch} from 'react-router-dom'
import { Nav } from './components'
import { Home } from './components'
import hamburger from './assets/menu.svg'

import './PlantLife.css'

class PlantLife extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Nav />
            <main>
                <a href="#" className="toggle-nav">
                    <img src={hamburger} alt=""/>
                    Menu
                </a>
                <Switch>
                    <Route exact path="/plant-life" render={() => (<Home />)} />
                    <Route path="/plant-life/shop" render={() => (<div>Shop</div>)} />
                    <Route path="/plant-life/about" render={() => (<div>About</div>)} />
                    <Route path="/plant-life/help" render={() => (<div>Help</div>)} />
                    <Route path="/plant-life/blog" render={() => (<div>Blog</div>)} />
                </Switch>
            </main>
            </>
         );
    }
}
 
export default PlantLife;