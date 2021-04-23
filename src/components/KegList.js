import React from 'react';
import Keg from './Keg';

function KegList() {
  return (
    <>
      <Keg 
        name="Skeleton Cruise"
        brand="Hop Butcher for the World"
        price="40.50"
        alcoholContent="6.25"
      />
      <Keg 
      name="Cold IPA"
      brand="Ecliptic Brewing"
      price="45.00"
      alcoholContent="8.00"
      />
    </>
  );
}

export default KegList;
