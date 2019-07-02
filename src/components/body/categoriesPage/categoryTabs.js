import React, { Component } from 'react';
import axios from 'axios';

class categoryTabs extends Component {
    constructor(props){
        super(props)
        this.state ={
            catagoryName:'',
            catagoryImg:''
        }
        this.getCategories();
    }

    getCategories(){
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => {
            var responce = res.data.categories[this.props.id];
            this.setState({catagoryName: responce.strCategory, catagoryImg: responce.strCategoryThumb});
        });
    }

    render() {
        return (
            <a href='#'>
                <div className ='catagory'>
                    <img src={this.state.catagoryImg} alt={this.state.catagoryName}/>
                    <h4>{this.state.catagoryName}</h4>
                </div>
            </a>
        )
    }
}
export default categoryTabs;
