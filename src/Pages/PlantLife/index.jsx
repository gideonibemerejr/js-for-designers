import React, { Component } from 'react';
import {  Route, Link, Switch} from 'react-router-dom'
import { Nav } from './components'
import { Home } from './components'
import open from './assets/menu.svg'
import close from './assets/close.svg'

import './PlantLife.css'

class PlantLife extends Component {
    state = { 
        menuIsOpen: false,
     }


    handleMenuClick = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }

    render() { 
        return ( 
            <>
            <Nav />
            <main className={this.state.menuIsOpen ? 'PL-main open' : 'PL-main'}>
                <a onClick={this.handleMenuClick} className="PL-toggle-nav">
                    {this.state.menuIsOpen ? (
                            <><img src={close} alt=""/>Close
                            </>
                        ) : (
<>
                            <img src={open} alt=""/>
                            Menu
                            </>
                        )
                    }
                </a>
                <Switch>
                    <Route exact path="/plant-life" render={() => (<Home {...this.state} handleMenuClick={this.handleMenuClick}/>)} />
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