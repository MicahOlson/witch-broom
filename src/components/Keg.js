import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <h4>from {props.brand}</h4>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.alcoholContent}%</p>
      <hr/>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
}

export default Keg;
