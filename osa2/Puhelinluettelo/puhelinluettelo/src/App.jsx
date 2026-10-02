import { useEffect, useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const duplicate = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
    if (duplicate) {
      alert(`${newName} is allready added`)
      setNewName('')
      setNewNumber('')
      return
    }
    
    personService
      .create(personObject)
          .then((createdPerson) => {
            setPersons(persons.concat(createdPerson))
        setNewName('')
        setNewNumber('')
          })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={findName}
        onChange={(event) => setFindName(event.target.value)}
      />

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onNameChange={(event) => setNewName(event.target.value)}
        newNumber={newNumber}
        onNumberChange={(event) => setNewNumber(event.target.value)}
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons} filterText={findName} />
    </div>
  )

}

export default App