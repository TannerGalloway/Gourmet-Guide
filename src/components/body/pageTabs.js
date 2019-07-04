import React, { Component } from 'react';
import axios from 'axios';
import '../css/pageTabs.css';

class pageTabs extends Component {
    constructor(props){
        super(props)
        this.state ={
            Title:'',
            Img:''
        }
        this.getfoodData();
    }

    getfoodData(){
        var responce;
        var dataLength = 0;
        var responceId;
        var atag;
        var mainDiv;
        var subDiv;
        var img;
        var textTag;
        var text;
        var currentDiv;

        // With the returned data from the api that was requested creates divs with image, name of meal or catagory and assigns proper link to page about that meal or meals associated with the catorgry. 
        axios.get(this.props.apiLink).then(res => {
            currentDiv = document.getElementById('ContainerDiv');
            
            switch(this.props.use){
                // load categories page
                case 'categories':
                    responce = res.data.categories;
                    dataLength = responce.length;
                    for(var i = 0; i < dataLength; i++){
                        responceId = responce[i];
                        this.setState({Title: responceId.strCategory, Img: responceId.strCategoryThumb});

                        mainDiv = document.createElement("div");
                        mainDiv.setAttribute('class', 'meal');

                        atag = document.createElement("a");
                        atag.setAttribute('href', '/categories/' + this.state.Title);

                        subDiv = document.createElement("div");
                        subDiv.setAttribute('class', 'catagory');

                        img = document.createElement("img");
                        img.setAttribute("src", this.state.Img);
                        img.setAttribute("alt", this.state.Title);

                        textTag = document.createElement("h4");
                        text = document.createTextNode(this.state.Title);

                        subDiv.appendChild(img);
                        textTag.appendChild(text);
                        subDiv.appendChild(textTag);
                        atag.appendChild(subDiv);
                        mainDiv.appendChild(atag);
                        currentDiv.appendChild(mainDiv);

                    }
                break;
                // filter when a cataegory was clicked
                case 'filter':
                    responce = res.data.meals;
                    dataLength = responce.length;
                    for(var j = 0; j < dataLength; j++){
                        responceId = responce[j];
                        this.setState({Title: responceId.strMeal, Img: responceId.strMealThumb});

                        atag = document.createElement("a");
                        atag.setAttribute('href', '/recipes/' + this.state.Title.split(' ').join('-'));

                        subDiv  = document.createElement("div");
                        subDiv.setAttribute('class', 'recipe');

                        img = document.createElement("img");
                        img.setAttribute("src", this.state.Img);
                        img.setAttribute("alt", this.state.Title);

                        textTag = document.createElement("h4");
                        text = document.createTextNode(this.state.Title);

                        subDiv.appendChild(img);
                        textTag.appendChild(text);
                        subDiv.appendChild(textTag);
                        atag.appendChild(subDiv);
                        currentDiv.appendChild(atag);
                    }
                break;
                // search page render
                case 'search':
                    responce = res.data.meals;
                    if(responce === null)
                    {
                        subDiv  = document.createElement("div");
                        subDiv.setAttribute('class', 'error');

                        textTag = document.createElement("h2");
                        text = document.createTextNode('No Recipes Found');

                        textTag.appendChild(text);
                        subDiv.appendChild(textTag);
                        currentDiv.appendChild(subDiv);
                    }
                    else{
                        dataLength = responce.length;
                        for(var k = 0; k < dataLength; k++){
                            responceId = responce[k];
                            this.setState({Title: responceId.strMeal, Img: responceId.strMealThumb});

                            atag = document.createElement("a");
                            atag.setAttribute('href', '/recipes/' + this.state.Title.split(' ').join('-'));

                            subDiv  = document.createElement("div");
                            subDiv.setAttribute('class', 'recipe');

                            img = document.createElement("img");
                            img.setAttribute("src", this.state.Img);
                            img.setAttribute("alt", this.state.Title);

                            textTag = document.createElement("h4");
                            text = document.createTextNode(this.state.Title);

                            subDiv.appendChild(img);
                            textTag.appendChild(text);
                            subDiv.appendChild(textTag);
                            atag.appendChild(subDiv);
                            currentDiv.appendChild(atag);
                        }
                    }

                break;
                default:
                        atag = document.createElement("a");
                        atag.setAttribute('href', '/');
                        
                        subDiv  = document.createElement("div");
                        subDiv.setAttribute('class', 'error');

                        textTag = document.createElement("h2");
                        text = document.createTextNode('ERROR 404 Page Not Found');

                        textTag.appendChild(text);
                        subDiv.appendChild(textTag);
                        atag.appendChild(subDiv);
                        currentDiv.appendChild(atag);
                break;
            }
        });
    }

    render() {
        return (
            <div id='ContainerDiv'>
            </div>
        )
    }
}
export default pageTabs;
