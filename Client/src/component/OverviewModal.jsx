/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const modalStyles = {
  display: 'inline',
  position: 'fixed',
  borderRadius: '10px',
  height: 'fit-content',
  width: 'fit-content',
  minHeight: '1000px',
  top: '65%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rfga(195, 240, 247, .7)',
  padding: '50px',
  zIndex: 1000
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

const Button = styled.button`
  border: none;
  background: none;
  font-size: 2em;
  color: #A4BBCB;
  z-index: 1005
  &:focus{
    outline: none;
  }
  &:hover{
    color: #A4BBCB;
    transform: scale(1.5, 1.5);
  }
`;

const Image = styled.img`
  max-height: 1000;
  max-width: 1000;
`;

const OverviewModal = ({ open, onClose, productStyles, mainImageIndex, setMainImageIndex }) => {
  const [magnefied, setMagnefied] = useState(false);
  if (!open) return null;

  const handleNext = () => {
    if (mainImageIndex < productStyles.results.length - 1) {
      setMainImageIndex(((prevImage) => prevImage + 1));
    }
  };

  const handlePrevious = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex((nextImage) => nextImage - 1);
    }
  };

  const magnefy = () => (magnefied === false
    ? <Image src={productStyles.results[mainImageIndex].photos[0].url} alt="" height="700" onClick={onClickMag} style={{ cursor: 'zoom-in' }} />
    : (
      <Image
        src={productStyles.results[mainImageIndex].photos[0].url}
        alt=""
        height="700"
        onClick={onClickMag}
        style={{ transform: 'scale(2.5, 2.5)', cursor: 'zoom-out' }}
      />
    ));

  const onClickMag = () => {
    setMagnefied(!magnefied);
    magnefy();
  };

  return (
    <>
      <div style={overlayStyle} />
      <div style={modalStyles}>
        <div>
          <Button name="close-modal" onClick={onClose}>&#8855;</Button>
        </div>
        <div>
          <Button name="previous-picture" type="button" className="modalPrevBtn" onClick={handlePrevious}>&#8249;</Button>
          {magnefy()}
          <Button name="next-picture" type="button" className="modalNextBtn" onClick={handleNext}>&#8250;</Button>
        </div>
      </div>
    </>
  );
};

export default OverviewModal;
