import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import url from './public/api/cars.json'
import Cars from './Cars';
import Items from './Items';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


function App() {
  const[cars,setCars]=useState([]);

  useEffect(()=>{
    setCars(url)
  },[]);
  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {cars.map((item) => (
            <Items><Cars ditails={item}/></Items>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
