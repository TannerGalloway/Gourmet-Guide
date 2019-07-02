import React from 'react';
import '../../css/categoryPage.css';
import CategoryTab from './categoryTabs';

function categoryPage() {
    return (
        <div className = "categoryContainer">
            <CategoryTab id={0}/>
            <CategoryTab id={1}/>
            <CategoryTab id={2}/>
            <CategoryTab id={3}/>
            <CategoryTab id={4}/>
            <CategoryTab id={5}/>
            <CategoryTab id={6}/>
            <CategoryTab id={7}/>
            <CategoryTab id={8}/>
            <CategoryTab id={9}/>
            <CategoryTab id={10}/>
            <CategoryTab id={11}/>
        </div>
    )
}

export default categoryPage;
