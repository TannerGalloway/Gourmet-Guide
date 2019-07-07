import React from 'react';
import ResultsTab from '../pageTabs';

function mealDisplay() {
    return (
        <ResultsTab apiLink={'https://www.themealdb.com/api/json/v1/1/search.php?s=' + sessionStorage.getItem('searchTerm')} use={'search'}/>
    )
}

export default mealDisplay;
