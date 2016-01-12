import React from 'react';
import { Link } from 'react-router';

class ListItem extends React.Component {
    getLink(href, title){
        if(href){
            return <Link to={href} activeClassName="active">{title}</Link>;
        }
        return title;
    }

    getSubList(children){
        if(children && children.length){
            let List = this.props.config.components.List;
            return <List links={children} config={this.props.config}/>;
        }
        return null;
    }

    render(){
        let link = this.getLink(this.props.link.href, this.props.link.title),
            subList = this.getSubList(this.props.link.children);
        return (
            <li>
                {link}
                {subList}
            </li>
        );
    }
};

export default ListItem;
