import React,{useState,useEffect} from 'react';
import personService from './services/persons'
import './App.css';

function App() {

  useEffect(()=>{
    personService
     .getAll()
     .then(initialPersons => {
        console.log(initialPersons)
     })
   }, [])
 

  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
