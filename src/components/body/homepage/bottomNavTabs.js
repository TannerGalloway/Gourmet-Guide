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
                <li id = 'topleft'>
                    <h2>
                        <a href='/popularrecipes'>Popular Recipes</a>
                    </h2>
                    <a href='/popularrecipes'>
                        <img src={featuredImg} alt={'Popular Recipes'}></img>
                    </a>
                </li>
                <li id = 'topright'>
                    <h2>
                        <a href='/categories'>Recipe Categories</a>
                    </h2>
                    <a href='/categories'>
                        <img src={categoriesImg} alt={'Recipe Categories'}></img>
                    </a>
                </li>
                <li id = 'bottomleft'>
                    <h2>
                        <a href='/videos'>Videos</a>
                    </h2>
                    <a href='/videos'>
                        <img src={videosImg} alt={'Videos'}></img>
                    </a>
                </li>
                <li id = 'bottomright'>
                    <h2>
                        <a href='/about'>About</a>
                    </h2>
                    <a href='/about'>
                        <img src={aboutImg} alt={'About'}></img>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default  bottomNavTabs;
