import React, {useState, useEffect} from "react";
import logo from './logo.svg';

import axios from 'axios'

import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

import personServices from "./services/PhoneServices"


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName]    = useState('')
  const [newPhone, setNewPhone]  = useState('')
  const [search,setSearch]       = useState('')

  /**
   * Initial load of phone json
   */
  useEffect(()=>{
    personServices
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)

        console.log(initialPersons)
      })
  },[])

  /**
   * State name input handler
   * @method
   */
  const handleInputChange = e =>{
    const inputText = e.target.value;

    setNewName(inputText);
  }

  /**
   * State phone input handler
   * @method
   */
  const handlePhoneChange = e =>{
    e.preventDefault();
    const inputText = e.target.value;

    setNewPhone(inputText);
  }

  /**
   * Delete handler
   * @method
   * use this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   * array.find(function
   */
  const handleDelete = e =>{
    const verify = window.confirm("test")

    console.log(persons)
  }

  /**
   * Submits new phone user to notes json db
   * @method
   */
  const handleSubmit = e =>{
    e.preventDefault();


    const newPersonObject = {
      name: newName,
      phone: newPhone
    }

    const result = persons.filter(obj => {
      if(obj.name === newName){
        alert(`${newName} is already added to phonebook`)
        return
      }
    })

    personServices
      .create(newPersonObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
    })
  }

  /**
   * Display filtered results
   * @method
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
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App