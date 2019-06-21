import React, { Component } from 'react'
import axios from 'axios';
import '../../css/sidevideo.css';

 class sidevideo extends Component {
     constructor(props){
         super(props)
         this.state={
             mealName: '',
             mealvideo: ''
         }
     }

     componentDidMount(){
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => {
                var responce = res.data.meals[0];
                var videolink = responce.strYoutube;
                var videoID = videolink.substring(videolink.search('=') + 1, videolink.length);
                var videourl = videolink.substring(0, videolink.search('m') + 1);
                this.setState({mealName: responce.strMeal, mealvideo: videourl + '/embed/' + videoID});
            });
     }
    render() {
        return (
            <div className = 'homeVideo'>
                <h4 style={{color: '#8e0034'}}> Cooking Video</h4>
                <iframe title={this.state.mealName} id="player" type="text/html" width="200" height="175"
                src={this.state.mealvideo}
                frameBorder="0"></iframe>
                <h4>{this.state.mealName}</h4>
            </div>
        )
    }
}

export default sidevideo;
