import React, { useState} from 'react';
import logo from './logo.svg';
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])

  const [newName, setNewName] = useState('')


  const handleInputChange = e =>{
    const inputText = e.target.value;

    setNewName(inputText);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    const newPersonObject = {
      name: newName
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  const rows = () => persons.map((person,index)=> 
    <Person 
      key={index} 
      person={person} 
    />
  );

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input 
            value={newName} 
            type="text" 
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button 
            type="submit"
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div><ul>{rows()}</ul></div>
      
    </div>
  )
}

export default App