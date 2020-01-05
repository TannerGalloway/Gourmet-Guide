import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './foodCarouselTabs';
import update from 'immutability-helper';

var targetElementID = 0;
var tabClickActive = true;
class foodCarousel extends Component {
    constructor(props){
        super(props);
        this.state={
            meals: [
                {
                    img: '',
                    name: '',
                    area: '',
                    id: '0',
                    active: true
                },

                {
                    img: '',
                    name: '',
                    area: '',
                    id: '1',
                    active: false
                },

                {
                    img: '',
                    name: '',
                    area: '',
                    id: '2',
                    active: false
                },
            ]
        };
    }

    componentDidMount()
    {
        // add meals to state
        for( var i = 0; i < 3; i++)
        {
                let index = i;
                axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res =>{
                var responce = res.data.meals[0];
                this.setState({meals: update(this.state.meals, {[index]: {$merge: {img: responce.strMealThumb, name: responce.strMeal, area: responce.strArea}}})});
            });
        }
    };

    // click on tabs homepage
    tabClickHandle = (event) =>{

        if(tabClickActive){
            tabClickActive = false;

            // gets id of tab clicked
            event.target.parentElement.className === 'text' || event.target.parentElement.className === 'thumbnail' ? targetElementID = event.target.parentElement.parentElement.id: targetElementID = event.target.parentElement.id;
        
            // sets active state for tab clicked
            this.setState((prevState) => ({
                meals: prevState.meals.map(mealObjFalse => (mealObjFalse.active === true) ? {...mealObjFalse, active: false} : mealObjFalse),
            }), () => this.setState((prevState) => ({meals: prevState.meals.map((mealObjTrue => (mealObjTrue.id === targetElementID) ? {...mealObjTrue, active: true}: mealObjTrue),)})));

            setTimeout(() => tabClickActive = true, 1000);
        }
    };

    render() {
            return (
                <div className = 'mainImg'>
                    <a href={'/recipes/' + this.state.meals[targetElementID].name.split(' ').join('-')}>
                        <img 
                            style={{width: '100%', height: '425px', borderStyle:'solid', borderColor: 'white'}} 
                            src={this.state.meals[targetElementID].img} alt={this.state.meals[targetElementID].name}>
                        </img>
                    </a>
                    <div className="flex-container" style={{display: 'inline-flex', position: 'relative', bottom: '8px' }}>

                        <Tabs
                            // style={this.displayStyle} 
                            action={this.tabClickHandle} 
                            id={0}
                            class={this.state.meals[0].active ? 'Tab1Active' : 'tab1'} 
                            img={this.state.meals[0].img} 
                            alt={this.state.meals[0].name} 
                            titleClass={this.state.meals[0].active ? 'TitleActive' : 'title'} 
                            title={this.state.meals[0].name} 
                            subtitleClass={this.state.meals[0].active ? 'SubtitleActive' : 'subtitle'} 
                            subtitle={'A ' + this.state.meals[0].area + ' dish'} 
                        />

                        <Tabs  
                            action={this.tabClickHandle}
                            id={1} 
                            class={this.state.meals[1].active ? 'Tab2Active' : 'tab2'}
                            img={this.state.meals[1].img} 
                            alt={this.state.meals[1].name} 
                            titleClass={this.state.meals[1].active ? 'TitleActive' : 'title'} 
                            title={this.state.meals[1].name} 
                            subtitleClass={this.state.meals[1].active ? 'SubtitleActive' : 'subtitle'} 
                            subtitle={'A ' + this.state.meals[1].area + ' dish'} 
                        />

                        <Tabs 
                            action={this.tabClickHandle}
                            id={2} 
                            class={this.state.meals[2].active ? 'Tab3Active' : 'tab3'}
                            img={this.state.meals[2].img} 
                            alt={this.state.meals[2].name} 
                            titleClass={this.state.meals[2].active ? 'TitleActive' : 'title'} 
                            title={this.state.meals[2].name} 
                            subtitleClass={this.state.meals[2].active ? 'SubtitleActive' : 'subtitle'} 
                            subtitle={'A ' + this.state.meals[2].area + ' dish'}
                         />

                    </div>
                </div>
            )
    }
};

export default foodCarousel;
