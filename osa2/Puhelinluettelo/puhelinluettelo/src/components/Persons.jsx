import personService from '../services/persons'

const Persons = ({ persons, filterText,}) => (
  <div>
    {persons
      .filter((person) => person.name.toLowerCase().includes(filterText.toLowerCase()))
      .map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => {
            if (window.confirm(`Delete ${person.name}?`)) {
              personService.remove(person.id)
            }
          }}>
            Delete
          </button>
        </div>
      ))}
  </div>
)

export default Persons
