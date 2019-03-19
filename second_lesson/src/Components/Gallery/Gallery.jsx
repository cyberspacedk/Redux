import React, { Component } from 'react';
import {connect} from 'react-redux';  
import {asyncGalleryAction} from '../../Redux/Actions/galleryAction';


class Gallery extends Component {


  render() {

  const{getGallery,gallery} = this.props;

    return (
      <div className="gallery">
        
        <button onClick={getGallery}>Get data</button>
        <div className="gallery_container">
          {gallery.map(elem=> (
            <img className="galleryItem" src={elem.largeImageURL} />
          ))}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  gallery: state.gallery 
})

const mapDispatchToProps = (dispatch) => ({ 
  getGallery : () => dispatch(asyncGalleryAction())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Gallery); 
