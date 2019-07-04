import React, { Component } from 'react';
import '../../css/foodCarouselTabs.css';

class foodCarouselTabs extends Component {
    render() {
        return (
            <div id={this.props.id} onClick={this.props.action} className={this.props.class}>
                <div className='thumbnail' style={{display: 'inline'}}>
                    <img src={this.props.img} alt={this.props.alt}/>
                </div>
                <div className="text">
                    <p className={this.props.titleClass}>{this.props.title}</p>
                    <p className = {this.props.subtitleClass}>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}
export default foodCarouselTabs;
