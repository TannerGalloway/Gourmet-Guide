import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../../navbar';
import FoodCarousel from './foodCarousel';
import BottomNavTabs from './bottomNavTabs';
import Sidevideo from './sidevideo';
import Siderecipes from './siderecipes';
import Sidefacts from './sidefacts';
import Socialmedia from './socialmedia';

class body extends Component {
    render() {
        return (
            <React.Fragment>
                <Row style={{marginTop: '10px'}}>
                    <Col sm={8}><Navbar/></Col>
                    <Col sm={4}><h4 style={{color: '#8e0034'}}> Cooking Video</h4></Col>
                </Row>
                <Row style={{marginTop: '0px'}}>
                    <Col sm={8}><FoodCarousel/></Col>
                    <Col sm={4}>
                        <Sidevideo/>
                        <Siderecipes/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}><BottomNavTabs/></Col>
                    <Col sm={4}>
                        <Sidefacts/>
                        <Socialmedia/>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
};

export default body;
