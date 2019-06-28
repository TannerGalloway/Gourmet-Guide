import React, { Component } from 'react';
import foodfactsarr from './foodfacts.json';
import '../css/sidefacts.css';

 class sidefacts extends Component {

    componentDidMount()
    {
        var index = -1;
        var facts = document.querySelectorAll('.foodfacts > p');
        facts.forEach((factElement) => {
            index = Math.floor(Math.random() * foodfactsarr.length);
            facts.forEach((factIDcheck) => {
                index === factIDcheck.id ? index = Math.floor(Math.random() * foodfactsarr.length) : factElement.setAttribute('id', index)
            });
            factElement.textContent = foodfactsarr[index];
        });
    }
    render() {
        return (
            <div className = 'foodfacts'>
            <h4 style={{color: '#8e0034'}}> Fun Food Facts</h4>
            <p id='#' className='factsText'></p>
            <p id='#' className='factsText'></p>
            <p id='#' className='factsText'></p>
        </div>
        )
    }
}
export default sidefacts;
