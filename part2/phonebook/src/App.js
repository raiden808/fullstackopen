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

        console.log("Persons: ",initialPersons)
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
   * delete sample: https://alligator.io/react/axios-react/
   */
  const handleDelete = (e,personDetails) =>{
    const verify = window.confirm(`Remove ${personDetails.name} ?`)

    if(verify){
      let i = personDetails.index;
      personServices
        .deleteUser(personDetails.id)
        .then(returnNewDb =>{
          /**
           * new array from immutable state
           */
          const filteredItems = persons.slice(0, i).concat(persons.slice(i + 1, persons.length))
  
          setPersons(filteredItems)
      })
    }
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

    let exist = false;

    const result = persons.filter((obj,index) => {
      if(obj.name === newName){
        alert(`${newName} is already added to phonebook`)

        
        /**
         * Updates peron number if exist.
         * to update state and remove exising array.
         */

         console.log("Exist obj: ",index)

        personServices
          .updateNumber(obj.id,newPersonObject)
          .then(updatedPersons =>{

            /**
             * Sets and find new perons
             */
            const newPerson = persons.concat();
            newPerson.splice(index,1,updatedPersons)
            setPersons(newPerson)
          })

        exist = true;
      }
    })

    if(exist == false){
      personServices
        .create(newPersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
      })
    }
  }

  /**
   * finds and replace existing person
   */
  const insertNew = (newObject) =>{
    var setPersons = persons.concat();

    // let foundIndex = setPersons.findIndex(element => element.id === item.id)
    // items.splice(foundIndex, 1, item)
  }

  /**
   * Update existing user number
   * todo - retrieve number
   */
  const updateNumber = () =>{

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