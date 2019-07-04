import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import update from 'immutability-helper';
import '../css/siderecipes.css';

class siderecipes extends Component {
    constructor(props){
        super(props)

        // set state to recipes that are in session storage.
        this.state={
            popRecipes: [
                {
                    img: "",
                    name: "",
                    area: ""
                },

                {
                    img: "",
                    name: "",
                    area: ""
                },

                {
                    img: "",
                    name: "",
                    area: ""
                }
                
            ]
        }
        
        // set recipes in session storage for persistance across all pages.
        if(sessionStorage.getItem("popRecipesLoaded") === null)
        {
            this.getmeals(null);
        }
        else if(sessionStorage.getItem("popRecipesLoaded") === "true"){
            this.getmeals("true");
        }
    };

    
    // componentDidMount()
    // { 
    //     this.timer();
    // };
    
    getmeals = (loadedmealState) =>{
        for( var i = 0; i < 3; i++)
        {
            let index = i;
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res =>{
                var responce = res.data.meals[0];

                if(loadedmealState === null || loadedmealState === "false"){
                    // set recipe in session storage
                    sessionStorage.setItem("PopularRecipe" + index, JSON.stringify({img: responce.strMealThumb, name: responce.strMeal, area: responce.strArea}));

                    // set recipe in state from session storage
                    this.setState({popRecipes: update(this.state.popRecipes, {[index]: {$merge: {img: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).img, name: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).name, area: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).area}}})});
                }
                else if(loadedmealState === "true"){
                    // set recipe in state from session storage
                    this.setState({popRecipes: update(this.state.popRecipes, {[index]: {$merge: {img: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).img, name: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).name, area: JSON.parse(sessionStorage.getItem("PopularRecipe" + index)).area}}})});
                }

            });
        }
        sessionStorage.setItem("popRecipesLoaded", true);
    };

    // sets a timer so that the Popular Recipes will change daily. 
    // timer(){
    //     setInterval(() => { 
    //         clearInterval(); 
    //         if(moment().format('h:mm:ss a') === '12:00:00 pm')
    //         {
    //             this.getmeals("false");
    //         }
    //     }, 1000);
    // };
    
    render() {
        return(
            <div className= 'sidepopular'>
                <h4 style={{color: '#8e0034'}}> Popular Recipes</h4>
                <div className='siderecipe1'>
                    <a href='#'>
                        <img src={this.state.popRecipes[0].img} alt={this.state.popRecipes[0].name}></img>
                    </a>
                    <a className = 'sidetext' href='#'>
                        <h6>{this.state.popRecipes[0].name}</h6>
                        <p>{'A ' + this.state.popRecipes[0].area + ' dish'}</p>
                    </a>
            </div>
            <div className='siderecipe2'>
                <a href='#'>
                    <img src={this.state.popRecipes[1].img} alt={this.state.popRecipes[1].name}></img>
                </a>
                    <a className = 'sidetext' href='#'>
                        <h6>{this.state.popRecipes[1].name}</h6>
                        <p>{'A ' + this.state.popRecipes[1].area + ' dish'}</p>
                </a>
            </div>
            <div className='siderecipe3'>
                <a href='#'>
                    <img src={this.state.popRecipes[2].img} alt={this.state.popRecipes[2].name}></img>
                </a>
                <a className = 'sidetext' href='#'>
                    <h6>{this.state.popRecipes[2].name}</h6>
                    <p>{'A ' + this.state.popRecipes[2].area + ' dish'}</p>
                </a>
            </div>
        </div>
        )
    }
}

export default siderecipes;
