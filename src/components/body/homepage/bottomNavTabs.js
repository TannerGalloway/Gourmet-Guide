import React from 'react';
import '../../css/bottomNavTabs.css';
import featuredImg from '../../images/featured.jpg';
import categoriesImg from '../../images/categories.jpg';
import videosImg from '../../images/videos.jpg';
import aboutImg from '../../images/about.jpg';

function bottomNavTabs() {
    return (
        <div className = 'navtabs'>
            <ul>
                <a href='/popularrecipes'>
                    <li id = 'topleft'>
                        <h2>Popular Recipes</h2>
                        <img src={featuredImg} alt={'Popular Recipes'}/>
                    </li>
                </a>
                <a href='/categories'>
                    <li id = 'topright'>
                        <h2>Recipe Categories</h2>
                        <img src={categoriesImg} alt={'Recipe Categories'}/>
                    </li>
                </a>
                <a href='/videos'>
                    <li id = 'bottomleft'>
                        <h2>Videos</h2>
                        <img src={videosImg} alt={'Videos'}></img>
                    </li>
                </a>
                <a href='/about'>
                    <li id = 'bottomright'>
                        <h2>About</h2>
                        <img src={aboutImg} alt={'About'}></img>
                    </li>
                </a>
            </ul>
        </div>
    )
};

export default  bottomNavTabs;
