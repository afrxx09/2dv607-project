import React, { Component } from 'react';

export default class BSBrandImage extends Component{
    render(){
        let imageOptions = this.props.opts;
        return(
            <span>
                <img src={imageOptions.src} alt={this.props.title}/>
            </span>
        );
    }
}