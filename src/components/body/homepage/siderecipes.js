import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import update from 'immutability-helper';
import '../../css/siderecipes.css';

class siderecipes extends Component {
    constructor(props){
        super(props)
        this.state={
            featuredMeals: [
                {
                    img:'',
                    name: '',
                    area: ''
                },

                {
                    img:'',
                    name: '',
                    area: ''
                },

                {
                    img:'',
                    name: '',
                    area: ''
                }
                
            ],
            popRecipesLoaded: false
        }
    };

    

    componentDidMount()
    { if(!this.state.popRecipesLoaded)
        {
            this.getmeals();
            this.timer();
        }
        else{
            
            this.timer();
        }
    };
    
    getmeals = () =>{
        this.setState((prevstate) => ({popRecipesLoaded: !prevstate.popRecipesLoaded}));
        for( var i = 0; i < 3; i++)
        {
                let index = i;
                axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res =>{
                var responce = res.data.meals[0];
                this.setState({featuredMeals: update(this.state.featuredMeals, {[index]: {$merge: {img: responce.strMealThumb, name: responce.strMeal, area: responce.strArea}}})});
            });
        }
    };

    timer(){
        setInterval(() => { 
            clearInterval(); 
            if(moment().format('h:mm:ss a') === '12:00:00 pm')
            {
                this.setState({popRecipesLoaded: false});
                this.getmeals();
            }
        }, 1000);
    };

    render() {
        return(
            <div className= 'sidepopular'>
                <h4 style={{color: '#8e0034'}}> Popular Recipes</h4>
                <div className='siderecipe1'>
                    <a href='#'>
                        <img src={this.state.featuredMeals[0].img} alt={this.state.featuredMeals[0].name}></img>
                    </a>
                    <a className = 'sidetext' href='#'>
                        <h6>{this.state.featuredMeals[0].name}</h6>
                        <p>{'A ' + this.state.featuredMeals[0].area + ' dish'}</p>
                    </a>
            </div>
            <div className='siderecipe2'>
                <a href='#'>
                    <img src={this.state.featuredMeals[1].img} alt={this.state.featuredMeals[1].name}></img>
                </a>
                    <a className = 'sidetext' href='#'>
                        <h6>{this.state.featuredMeals[1].name}</h6>
                        <p>{'A ' + this.state.featuredMeals[1].area + ' dish'}</p>
                </a>
            </div>
            <div className='siderecipe3'>
                <a href='#'>
                    <img src={this.state.featuredMeals[2].img} alt={this.state.featuredMeals[2].name}></img>
                </a>
                <a className = 'sidetext' href='#'>
                    <h6>{this.state.featuredMeals[2].name}</h6>
                    <p>{'A ' + this.state.featuredMeals[2].area + ' dish'}</p>
                </a>
            </div>
        </div>
        )
    }
}

export default siderecipes;
