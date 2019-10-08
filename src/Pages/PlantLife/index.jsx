import React, { Component } from 'react';
import {  Route, Link, Switch} from 'react-router-dom'


class PlantLife extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Switch>
                    <Route exact path="/plant-life" render={() => (<div>Home</div>)} />
                    <Route path="/plant-life/shop" render={() => (<div>Shop</div>)} />
                    <Route path="/plant-life/about" render={() => (<div>About</div>)} />
                    <Route path="/plant-life/help" render={() => (<div>Help</div>)} />
                    <Route path="/plant-life/blog" render={() => (<div>Blog</div>)} />
                </Switch>
            </div>
         );
    }
}
 
export default PlantLife;