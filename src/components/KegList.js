import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <>
      {props.kegList.map((keg, index) => 
        <Keg 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}
        />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
