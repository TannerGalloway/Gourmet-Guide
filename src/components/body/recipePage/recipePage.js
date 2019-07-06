import React, { Component } from 'react';
import '../../css/recipePage.css';
import axios from 'axios';

class recipePage extends Component {
    constructor(props){
        super(props)
        this.state={
            RecipeName: '',
            recipeImg: '',
            ingredient: [],
            measurement:[]
        }
        this.getrecipe();
    }


    getrecipe(){
        var recipe = window.location.pathname;
        var start = recipe.lastIndexOf('/') + 1;
        var end = recipe.length;
        var recipeName = recipe.substring(start, end);
        recipeName = recipeName.split('-').join(' ');
        var ingredients = [];
        var measurements = [];

        // gets ingredients and measuresments and filters the response to only have ingredients and measuresments then sets state with array of ingredients and measuresments.
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + recipeName).then(res => {
            var responce = res.data.meals[0];

            for(var ingredient in responce){

                if(ingredient.includes('Ingredient') || ingredient.includes('Measure')){

                    if(ingredient.includes('Ingredient') && responce[ingredient] !== "" && responce[ingredient] !== null){
                        ingredients.push(responce[ingredient]);
                    }
                    else if(ingredient.includes('Measure') && responce[ingredient] !== "" && responce[ingredient] !== null){
                        
                        measurements.push(responce[ingredient]);
                    }
                }
            }
            this.setState(() => ({RecipeName: recipeName, recipeImg: responce.strMealThumb, ingredient: ingredients, measurement: measurements}), this.getingredientImgs);
        })
    }

    getingredientImgs(){
        var mainDiv = document.getElementsByClassName("ingredients");
        for(var i = 0; i < this.state.ingredient.length; i++)
        {       
                var ingredientDiv = document.createElement("div");
                    ingredientDiv.setAttribute("class", "ingredient");

                var ingredientLink = document.createElement("a");
                    ingredientLink.setAttribute("href", "#");    

                var ingredientImg = document.createElement("img");
                    ingredientImg.setAttribute("src", "https://www.themealdb.com/images/ingredients/" + this.state.ingredient[i].split(' ').join("%20") + "-Small.png");
                    ingredientImg.setAttribute("alt", this.state.measurement[i] + this.state.ingredient[i]);

                var imgText = document.createElement("h6");
                var imgTextContent = document.createTextNode(this.state.measurement[i] + " " + this.state.ingredient[i]);

                    imgText.appendChild(imgTextContent);
                    ingredientLink.appendChild(ingredientImg);
                    ingredientLink.appendChild(imgText);
                    ingredientDiv.appendChild(ingredientLink);
                    mainDiv[0].appendChild(ingredientDiv);
        }
    }

    render() {
        return (
            <div className = 'recipesContainer'>
                <div className = 'recipeHeading'>
                    <h4>{this.state.RecipeName}</h4>
                    <h4 id={'Ingredient'}>Ingredients</h4>
                </div>
                <div className = 'recipeImgs'>
                    <div className = 'mainMealImg'>
                        <img id='mealImg' src={this.state.recipeImg} alt={this.state.RecipeName}/>  
                    </div>
                    <div className = 'ingredients'>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default  recipePage;
