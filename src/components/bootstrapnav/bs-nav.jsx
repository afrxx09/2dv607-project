import React from 'react';
import { Link } from 'react-router';
import BSBrand from './bs-brand';

class BSNav extends React.Component {
    getBrandImage(ImageOptions, brandTitle){
        if(ImageOptions){
            let src = ImageOptions.src;
            return(
                <span>
                    <img src={src} alt={brandTitle}/>
                </span>
            );
        }
        return null;
    }

    render(){
        let props = this.props,
            config = props.config,
            type = config.bootstrap.type || '',
            BSClassNames = 'navbar navbar-default ' + type,
            brandOpts = config.bootstrap.brand,
            brand = (brandOpts) ?
                <BSBrand config={config} opts={brandOpts}/>
                : null ;
        return(
            <nav className={BSClassNames}>
                <div className='container-fluid'>
                    {brand}
                    <div id={config.id} className='collapse navbar-collapse'>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
}

export default BSNav;
