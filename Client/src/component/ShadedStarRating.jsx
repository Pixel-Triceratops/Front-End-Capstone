import React from 'react';

const STAR_RATING = {
  background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png")',
  backgroundRepeat: 'repeat-x',
  fontSize: 0,
  height: '21px',
  lineHeight: 0,
  overflow: 'hidden',
  textIndent: '-999em',
  width: '110px',


};
const RATING_SHADE = {
  background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png")',
  backgroundRepear: 'repeat-x',
  backgroundPosition: '0 100%',
  float: 'left',
  height: '21px',
  display: 'block',
  width: '85%',
};

// eslint-disable-next-line arrow-body-style
const ShadedStarRating = () => {
  return (
    <div>
      <div
        style={STAR_RATING}
      >
        <span
          style={RATING_SHADE}
        />
      </div>
    </div>
  );
};

export default ShadedStarRating;