import React, { useState } from "react";
import './App.css';

function App () {

  const [hex, setHex] = useState("#ffffff");

  const randomizedHex = () => {
  
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  setHex(randomColor);

  if(document.getElementById("test").innerHTML === hex){
    alert('Color updated!');
  }

  else if (document.getElementById("test").innerHTML !== hex){
    alert('Not a hex value');
  }
    
  var self = {};
  var d1 = document.createElement("li");
  var textnode = document.createTextNode(`${hex}`);
  d1.appendChild(textnode);
  self.d1 = document.getElementById('list').appendChild(d1);   
     
  }

  return(
  <div className = "App">
    <button onClick={randomizedHex}><h2 style={{color: `${hex}`,}}>Click me</h2></button>
    <input id="test" className="input" placeholder="Type the color in hex here" onChange={event => setHex(event.target.value)}></input>
    <h1 id="list"></h1>
  </div>
  );
}

export default App;
