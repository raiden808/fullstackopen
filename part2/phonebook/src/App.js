import React, { useState} from 'react';
import logo from './logo.svg';
import Person from "./components/Person";


/*
* Divide system into three components Good candidates
  1. Search filter
  2. add form
  3. Rendering component
*/

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
      <div>
        filter shown with 
        <input 
          value={search} 
          type="text" 
          onChange={handleSearchChange}
        />
      </div>
      <h2>Add a new</h2>
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