import React from 'react';
import '../../css/popRecipes.css';
import RecipesList from './recipesList';

 function popRecipes() {
    return (
        <div className ='recipesContainer'>
            <RecipesList 
            name={JSON.parse(sessionStorage.getItem("PopularRecipe0")).name}
            img={JSON.parse(sessionStorage.getItem("PopularRecipe0")).img}
            recipeId={0}                                     
            />
            <RecipesList 
            name={JSON.parse(sessionStorage.getItem("PopularRecipe1")).name}
            img={JSON.parse(sessionStorage.getItem("PopularRecipe1")).img}
            recipeId={1}                                     
            /> 
            <RecipesList 
            name={JSON.parse(sessionStorage.getItem("PopularRecipe2")).name}
            img={JSON.parse(sessionStorage.getItem("PopularRecipe2")).img}
            recipeId={2}                                     
            />                        
        </div>
    )
}

export default popRecipes;
