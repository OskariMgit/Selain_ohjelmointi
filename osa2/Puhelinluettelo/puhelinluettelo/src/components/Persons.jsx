const Persons = ({ persons, filterText }) => (
  <div>
    {persons
      .filter((person) => person.name.toLowerCase().includes(filterText.toLowerCase()))
      .map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
  </div>
)

export default Persons
