import React, { Component } from 'react';
import List from './list';

export default class VanillaNav extends Component{
    render(){
        return (
            <div id={this.props.config.id}>
                <List config={this.props.config} links={this.props.links}/>
            </div>
        );
    }
};