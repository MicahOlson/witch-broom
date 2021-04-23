import React from 'react';
import Keg from './Keg';

const mainKegList = [
  {
    name: "Skeleton Cruise",
    brand: "Hop Butcher for the World",
    price: "40.50",
    alcoholContent: "6.25"
  },
  {
    name: "Cold IPA",
    brand: "Ecliptic Brewing",
    price: "45.00",
    alcoholContent: "8.00"
  }
]

function KegList() {
  return (
    <>
      {mainKegList.map((keg, index) => 
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

export default KegList;
