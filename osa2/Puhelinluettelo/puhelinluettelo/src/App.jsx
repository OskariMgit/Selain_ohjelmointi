import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'John Doe', number: '045-1234567'},
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const duplicate = persons.some(
      (person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
    )

    if (duplicate) {
      alert(`${newName} is allready added`)
      setNewName('')
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <input
          value={findName}
          onChange={(event) => setFindName(event.target.value)}
        />
      </div>

      <h2>Add a new</h2>

      <form onSubmit={addPerson}>
        <div>name:
          <input 
          value={newName} 
          onChange={(event) =>  setNewName(event.target.value)} />
          </div>
        <div>number: <input  value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}/></div>
        <div><button type="submit">add</button></div>
      </form>
      
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(findName.toLowerCase()))
        .map((person) => (
        <div key={person.name}>{person.name}  {person.number}</div>
        ))}
    </div>
  )

}

export default App