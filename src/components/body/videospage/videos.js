import React, { Component } from 'react';
import '../../css/videos.css';
import Video from '../../sidebar/sidevideo';

class videos extends Component {
    render() {
        return (
            <div className='videosContainer'>
                <h4>Cooking Videos Gallery</h4>
                <div className ='videos'>
                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>

                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>

                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>
                    <Video pageUse ={"videos"}/>
                </div>
            </div>
        )
    }
}

export default videos;
