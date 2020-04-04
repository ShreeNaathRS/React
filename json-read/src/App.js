import React from 'react';
import logo from './logo.svg';
import './App.css';
import Property from './json/property.json';

function App() {
  return (
    <div className="App">
      {
        Property.map((prop)=>{
        return <input type = {prop.type} 
                      id = {prop.id}
                      maxLength = {prop.maxlength}
                      placeholder = {prop.placeholder}>
        </input>
        })
      }
    </div>
  );
}

export default App;
