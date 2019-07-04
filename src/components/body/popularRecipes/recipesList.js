import React, { Component } from 'react';
import axios from 'axios';

class recipesList extends Component {

    constructor(props){
        super(props)

        this.state={
            ingredient: [],
            measurement:[]
        }
        this.getingredients();
    }
    
    // gets ingredients and measuresments and filters the response to only have ingredients and measuresments then sets state with array of ingredients and measuresments.
    getingredients(){
        var ingredients = [];
        var measurements = [];
            var mealName = JSON.parse(sessionStorage.getItem("PopularRecipe" + this.props.recipeId)).name;
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName).then(res => {
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
                this.setState(() => ({ingredient: ingredients, measurement: measurements}), this.textToScreen);
            })
        }

        // creates p tags dynamicly according to how many ingredients and measuresments are needed to be displayed.
        // split current array in half to get 2 rows that are equal in size. 
        textToScreen()
        {
            var halfList = this.state.ingredient.length/2;
            var mainDiv = document.getElementsByClassName("popRecipe" + this.props.recipeId);
            var divLeft = document.createElement("div");
            divLeft.setAttribute("id", 'ingredientsColLeft' + this.props.recipeId);
            var divRight = document.createElement("div");
            divRight.setAttribute("id", 'ingredientsColRight' + this.props.recipeId);

            for(var i = 0; i < this.state.ingredient.length; i++)
            {
                let index = i;
                var para = document.createElement("p");
                var ingredientContent = document.createTextNode(this.state.measurement[index] + " " + this.state.ingredient[index]); 
                para.appendChild(ingredientContent);
                if(index < halfList){
                    divLeft.appendChild(para);
                }
                else if(index >= halfList)  
                {
                    divRight.appendChild(para);
                }  
               mainDiv[0].appendChild(divLeft);
               mainDiv[0].appendChild(divRight);
            }
        }
        
    render() {
        return (
            <a href = {'/recipes/' + this.props.name.split(' ').join('-')}>
                <div className={'popRecipe' + this.props.recipeId}>
                    <div className='popRecipeHeading'>
                        <h4>{this.props.name}</h4>
                        <h4 id={'Ingredient'}>Ingredients</h4>
                    </div>
                    <img src={this.props.img} alt= {this.props.name}/>
                </div>
            </a>
        )
    }
}

export default recipesList;
