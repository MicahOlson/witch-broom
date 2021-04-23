import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>{props.name}</h3>
      <h4>from {props.brand}</h4>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.alcoholContent}%</p>
      <p>Kegs in stock: ???</p>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
