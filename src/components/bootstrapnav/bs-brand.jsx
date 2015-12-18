import React from 'react';
import { Link } from 'react-router';
import BSBrandImage from './bs-brand-image';

class BSBrand extends React.Component {
    render(){
        let brandOptions = this.props.opts,
            navId = this.props.config.id,
            brandHref = brandOptions.href || '',
            brandTitle = brandOptions.title || '',
            imageOpts = brandOptions.image,
            brandImage = imageOpts ?
                <BSBrandImage opts={imageOpts} title={brandTitle}/>
                : null;
        return (
            <div className='navbar-header'>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={'#' + navId}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to={brandHref} className='navbar-brand'>
                    {brandImage}
                    {brandTitle}
                </Link>
            </div>
        )
    }
}

export default BSBrand;
