/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import OverviewModal from './OverviewModal';
import Thumbnails from './OverviewThumbnails';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const modalButtonStyle = {
  position: 'relative',
  zIndex: 1
};

const OverviewImageGallery = ({ images, productStyles, currentImageIndex }) => {
  const [currentImage, setImage] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const thumbContainer = React.useRef();

  const onThumbnailClick = (e, idx) => {
    e.preventDefault();
    setImage(idx);
  };

  useEffect(() => {
    thumbContainer.current.style.transitionDuration = '0.5s';
    thumbContainer.current.style.transform = `translate(0, -${70 * currentImage}px)`;
  }, [currentImage]);

  const handleNext = () => {
    if (currentImage < thumbContainer.current.children.length - 1) {
      setImage(((prevImage) => prevImage + 1));
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setImage((nextImage) => nextImage - 1);
    }
  };

  const handleMainNext = () => {
    if (mainImageIndex < images.length - 1) {
      setMainImageIndex((prevImage) => prevImage + 1);
    }
  };

  const handleMainPrev = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex((nextImage) => nextImage - 1);
    }
  };
  console.log(productStyles)
  return (
    <div>
      <button id="prev" type="button" onClick={handlePrevious}>Previous</button>
      <div className="view-port" style={styles.view_port}>
        <div ref={thumbContainer} className="thumbnail-container" style={styles.thumbnail_container}>
          {productStyles.results.map((image, idx) => (
            <div key={idx}>
              <Thumbnails
                image={image.photos[0].thumbnail_url}
                onThumbnailClick={onThumbnailClick}
              />
            </div>
          ))}
        </div>
      </div>
      <button id="next" type="button" onClick={handleNext}>Next</button>
      <div>
        <button type="button" onClick={handleMainPrev}>{'<'}</button>
        <div>
          <img className="main-image" src={productStyles.results[mainImageIndex].photos[0].url} alt="main diplay" height="300" width="225" />
        </div>
        <button type="button" onClick={handleMainNext}>{'>'}</button>
      </div>
    </div>
  );
};

const styles = {
  view_port: {
    position: 'absolute',
    top: '25%',
    left: '29%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '350px',
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  thumbnail_container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content'
  }
};
// OverviewImageGallery.propTypes = {
//   images: PropTypes.array
// };

export default OverviewImageGallery;
