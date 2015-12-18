import React from 'react';

const BSBrandImage = React.createComponent({
    render(){
        let imageOptions = this.props.opts;
        return(
            <span>
                <img src={imageOptions.src} alt={this.props.title}/>
            </span>
        );
    }
});

export default BSBrandImage;