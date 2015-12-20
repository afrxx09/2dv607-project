import React from 'react';

class BSBrandImage extends React.Component {
  render(){
      let imageOptions = this.props.opts;
      return(
          <span>
              <img src={imageOptions.src} alt={this.props.title}/>
          </span>
      );
  }
}

export default BSBrandImage;
