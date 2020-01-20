import React, {useState, useEffect} from "react";

import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

import personServices from "./services/persons"
import Notification from './components/Notification'

import './App.css'


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName]    = useState('')
  const [newPhone, setNewPhone]  = useState('')
  const [search,setSearch]       = useState('')
  const [errorMessage,setErrorMessage] = useState()

  const [notifStatus,setNotifStatus] = useState();

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

      setNotifStatus("delete")
      setErrorMessage(`Information of ${personDetails.name} has already been removed from server`)

      setTimeout(()=>{
        setErrorMessage(null)
      },5000)


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

        const verify = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

        if(verify){
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
        }
        /**
         * Updates peron number if exist.
         * to update state and remove exising array.
         */
        exist = true;
        setNewName('')
        setNewPhone('')
      }
    })

    if(exist == false){
      personServices
        .create(newPersonObject)
        .then(returnedPerson => {

          setNotifStatus("add")
          setErrorMessage(`Added ${newName}`)

          setTimeout(()=>{
            setErrorMessage(null)
          },5000)

          console.log("test",returnedPerson)

          setPersons(persons.slice(0).concat(returnedPerson))
          setNewName('')
          setNewPhone('')
        })
        .catch(error => {
          // this is the way to access the error message


          setErrorMessage(`${error.response.data.error}`);

          setTimeout(()=>{
            setErrorMessage(null)
          },5000)

          console.log(error.response.data)
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
      <Notification 
        notifStatus={notifStatus}
        message={errorMessage} 
      />
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