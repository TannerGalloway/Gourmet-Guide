import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from '../heading/navbar';
import Sidevideo from './homepage/sidevideo';
import Siderecipes from './homepage/siderecipes';
import Sidefacts from './homepage/sidefacts';
import Socialmedia from './homepage/socialmedia';
import Homebody from './homepage/homeBody';
class body extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <React.Fragment>
                        <div className='body'>
                            <div className='left' style={{width: '730px', float: 'left'}}>
                                <Navbar/>
                                <Route exact path="/" component={Homebody}/>
                            </div>
                            <div className='right' style={{float: 'right', width:'315px'}}>
                                <Sidevideo/>
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
