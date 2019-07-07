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
            measurement:[],
            recipeVideo: '',
            directions: ''
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

        // gets video, instructions, ingredients and measuresments and filters the response to only have ingredients and measuresments then sets state with video link and array of ingredients and measuresments while styling instructions for easy reading.
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + recipeName).then(res => {
            var responce = res.data.meals[0];
            var videolink = responce.strYoutube;
            var videoID = videolink.substring(videolink.search('=') + 1, videolink.length);
            var videourl = videolink.substring(0, videolink.search('m') + 1);
            
            var stringStart = 0;
            var directions = responce.strInstructions;
                directions = directions.replace("\r\n", "");
            var periodNum = responce.strInstructions.match(/\./g).length;
            var instructionDiv = document.getElementsByClassName("instructions");

            for(var i = 0; i < periodNum; i++)
            {
                var periodPosition = directions.indexOf(".", stringStart);
                var instruction = directions.substring(stringStart, periodPosition + 1);
                if(!instruction.match(/\d(?=\.)/)){
                    
                    var instructionPara = document.createElement("h6");
                    var instructionText = document.createTextNode(instruction);
                        instructionPara.appendChild(instructionText);
                        stringStart = periodPosition + 1;
                        instructionDiv[0].appendChild(instructionPara);                
                    }
                    else{stringStart = periodPosition + 1;}
            }

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
            this.setState(() => ({RecipeName: recipeName, recipeImg: responce.strMealThumb, ingredient: ingredients, measurement: measurements, recipeVideo: videourl + '/embed/' + videoID, directions: directions}), this.getingredientImgs);
        })
    }

    // gets images of ingredients that are stored in state array. and creates div, img and measuement with name of ingredient from state then appends the full div the ingredients container div.
    // Checks to see if user clicked on ingredient to search for more recipes. 
    getingredientImgs(){
        var mainDiv = document.getElementsByClassName("ingredients");
        document.addEventListener("click", function(event){
            if(event.target.parentElement.parentElement.className === "ingredient"){
                var ingredientClicked = event.target.id.split(' ').join("%20");
                sessionStorage.setItem('searchTerm', ingredientClicked);
            }
           });

        for(var i = 0; i < this.state.ingredient.length; i++)
        {       
                var ingredientDiv = document.createElement("div");
                    ingredientDiv.setAttribute("class", "ingredient");
                    ingredientDiv.setAttribute("id", this.state.ingredient[i])

                var ingredientLink = document.createElement("a");
                    ingredientLink.setAttribute("href", "/ingredientresults");

                var ingredientImg = document.createElement("img");
                    ingredientImg.setAttribute("src", "https://www.themealdb.com/images/ingredients/" + this.state.ingredient[i].split(' ').join("%20") + "-Small.png");
                    ingredientImg.setAttribute("alt", this.state.measurement[i] + " " + this.state.ingredient[i]);
                    ingredientImg.setAttribute("id", this.state.ingredient[i]);

                var imgText = document.createElement("h6");
                    imgText.setAttribute("id", this.state.ingredient[i]);
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
            <div className= 'recipesContainer'>
                <div className= 'recipeHeading'>
                    <h4 className= 'mealName'>{this.state.RecipeName}</h4>
                    <h4 className= 'Ingredient'>Ingredients</h4>
                </div>
                <div className= 'recipeContent'>
                    <div className= 'MealImgVideo'>
                        <img id='mealImg' src={this.state.recipeImg} alt={this.state.RecipeName}/>
                        <h4>Instructional Video</h4>
                        <iframe title={this.state.recipeName} id="player" type="text/html" width="215" height="175"
                        src={this.state.recipeVideo}
                        frameBorder="0"/>
                    </div>
                    <div className= 'ingredients'>
                    </div>
                </div>
                <div className= 'instructions'>
                        <h4>Instructions</h4>
                    </div>
            </div>
        )
    }
}

export default  recipePage;
