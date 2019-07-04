import React from 'react';
import RecipeTab from '../pageTabs';

function mealDisplay({match}) {
    var category = match.params.category;
    return (
        <RecipeTab apiLink={'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category} use={'filter'} class={'recipes'}/>
    )
}

export default mealDisplay;
