import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../heading/navbar';
import Sidevideo from '../sidebar/sidevideo';
import Siderecipes from '../sidebar/siderecipes';
import Sidefacts from '../sidebar/sidefacts';
import Socialmedia from '../sidebar/socialmedia';
import Home from './homepage/homeBody';
import About from './about/aboutpage';
import Videos from './videospage/videos';
import PopRecipes from './popularRecipes/popRecipes';
import Categories from './categoriesPage/categoryPage';

class body extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <React.Fragment>
                        <div className='body'>
                            <div className='left' style={{width: '730px', float: 'left'}}>
                                <Navbar/>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/videos" component={Videos}/>
                                <Route exact path="/popularrecipes" component={PopRecipes}/>
                                <Route exact path="/categories" component={Categories}/>
                            </div>
                            <div className='right' style={{float: 'right', width: '360px'}}>
                                <Sidevideo title={'Cooking Video'}/>
                                <Siderecipes/>
                                <Sidefacts/>
                                <Socialmedia/>
                            </div>
                        </div>
                    </React.Fragment>
                </Switch>
            </Router>
        )
    }
};

export default body;
