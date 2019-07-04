import React from 'react';
import FoodCarousel from './foodCarousel';
import BottomNavTabs from './bottomNavTabs';

function homeBody() {
    return (
        <React.Fragment>
            <div className='body'>
                <FoodCarousel/>
            </div>
            <div className='footer'style={{margin: '50px 0px 50px 0px'}}>
                <BottomNavTabs/>
            </div>
        </React.Fragment>
    )
};
export default homeBody;
