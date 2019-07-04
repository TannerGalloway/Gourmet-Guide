import React, { Component } from 'react'
import axios from 'axios';
import '../css/sidevideo.css';

 class sidevideo extends Component {
     constructor(props){
         super(props)
         this.state={
             mealName: '',
             mealLink: ''
         }

         if(this.props.pageUse === "videos"){
            this.getVideo("videos");
         }
          // set video in session storage for persistance across all pages.
         else if(sessionStorage.getItem("CookingVideoLoaded") === null){
            this.getVideo(null);
        }
        else if(sessionStorage.getItem("CookingVideoLoaded") === "true"){
            this.getVideo("true");
        }
     }

     // get youtube url and change url to embed url
     getVideo(loadedVideoState){
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => {
            var responce = res.data.meals[0];
            var videolink = responce.strYoutube;
            var videoID = videolink.substring(videolink.search('=') + 1, videolink.length);
            var videourl = videolink.substring(0, videolink.search('m') + 1);

            if(loadedVideoState === "videos"){
                this.setState({mealName: responce.strMeal, mealLink: videourl + '/embed/' + videoID});
            }
            else if(loadedVideoState === null || loadedVideoState === "false"){
                // set video in session storage
                sessionStorage.setItem("CookingVideo", JSON.stringify({mealName: responce.strMeal, mealLink: videourl + '/embed/' + videoID}));

                // set video in state from session storage
                this.setState({mealName: JSON.parse(sessionStorage.getItem("CookingVideo")).mealName, mealLink: JSON.parse(sessionStorage.getItem("CookingVideo")).mealLink});
            }
            else if(loadedVideoState === "true"){
                // set video in state from session storage
                this.setState({mealName: JSON.parse(sessionStorage.getItem("CookingVideo")).mealName, mealLink: JSON.parse(sessionStorage.getItem("CookingVideo")).mealLink});
            }
            sessionStorage.setItem("CookingVideoLoaded", true);
        });
     }
     
    render() {
        return (
            <div className = 'homeVideo'>
                <h4 style={{color: '#8e0034'}}>{this.props.title}</h4>
                <iframe title={this.state.mealName} id="player" type="text/html" width="200" height="175"
                src={this.state.mealLink}
                frameBorder="0"></iframe>
                <h4>{this.state.mealName}</h4>
            </div>
        )
    }
}

export default sidevideo;
