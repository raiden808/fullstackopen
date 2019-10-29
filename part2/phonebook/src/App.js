import React, { useState} from 'react';
import logo from './logo.svg';
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '123-123-123'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');

  /*
  * Name handler
  */
  const handleInputChange = e =>{
    const inputText = e.target.value;

    setNewName(inputText);
  }

  /*
  * Phone handler
  */
  const handlePhoneChange = e =>{
    e.preventDefault();
    const inputText = e.target.value;

    setNewPhone(inputText);
  }

  /*
  * Submit handler
  */
  const handleSubmit = e =>{
    e.preventDefault();


    const newPersonObject = {
      name: newName,
      phone: newPhone
    }

    //filter to block existing name
    const result = persons.filter(obj => {
      if(obj.name === newName){
        alert(`${newName} is already added to phonebook`)
        return
      }
    })

    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  /*
  * Display
  */
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
          number:
          <input 
            value={newPhone}
            type="text"
            onChange={handlePhoneChange}
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