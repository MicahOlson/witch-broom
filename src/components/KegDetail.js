import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <h4>from {keg.brand}</h4>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.alcoholContent}%</p>
      <p>Kegs in stock: ???</p>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;
