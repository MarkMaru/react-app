import React, { useState } from "react";
import ReactDOM from 'react-dom'
import './App.css';


const App = () => {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
  
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
    
    var self = {};
    const d1 = document.createElement("li");
    self.d1 = document.getElementById('list').innerHTML = `${hex}`;   
     
  }

  

  return(
  <div className = "App">
    <button onClick={randomizedHex}><h2 style={{color: `${hex}`,}}>Click me</h2></button>
    <ol id="list">
    </ol>
  </div>
  );
}

export default App;
