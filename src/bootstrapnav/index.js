import React from 'react'
import { Link } from 'react-router';
import BSList from './bs-list';

export default (props)=> {
    let config = props.config,
        links = props.links,
        type = config.bootstrap.type || '',
        BSClassNames = 'navbar navbar-default ' + type,
        brand = '';
    if(config.bootstrap.brand){
        let brandHref = config.bootstrap.brand.href || '',
            brandTitle = config.bootstrap.brand.title || '',
            brandImage = '';
        if(config.bootstrap.brand.image){
            let src = config.bootstrap.brand.image.src;
            brandImage = <span>
                    <img src={src} alt={brandTitle}/>
                </span>;
        }
        brand = <div className='navbar-header'>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={'#' + config.id}>
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
    }
    return(
        <nav className={BSClassNames} id={config.id}>
            <div className='container-fluid'>
                {brand}
                <div id={config.id} className='collapse navbar-collapse'>
                    <BSList config={config} links={links} rootNav={true}/>
                </div>
            </div>
        </nav>
    );
}