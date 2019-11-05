import React, { useState} from 'react';
import logo from './logo.svg';

import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Mary Calvin', number: '39-23-6422222' }
  ])

  const [newName, setNewName]    = useState('')
  const [newPhone, setNewPhone]  = useState('')
  const [search,setSearch]       = useState('')

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
    setNewPhone('')
  }

  /*
  * Search handler
  */
  const handleSearchChange = e =>{
    e.preventDefault();
    const inputText = e.target.value;

    setSearch(inputText);
  }

  return(
    <div>
      <h2>Phonebook</h2>

      <Filter 
        search={search} 
        handleSearchChange={handleSearchChange} 
      />

      <h2>Add a new</h2>

      <PersonForm 
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handlePhoneChange={handlePhoneChange}
        newPhone={newPhone}
        newName={newName}
      />

      <h2>Numbers</h2>
      <div>
        <Person
          persons={persons} 
          search={search}
        />
      </div>
    </div>
  )
}

export default App