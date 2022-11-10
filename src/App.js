import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import url from './public/api/cars.json'
import Cars from './Cars';


function App() {
  const[cars,setCars]=useState([]);

  useEffect(()=>{
    setCars(url)
  },[]);
  return (
    <div className="App">
      {cars.map((items)=><Cars ditails={items}/>)}
    </div>
  );
}

export default App;
