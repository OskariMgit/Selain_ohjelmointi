const Header = (props) => (
  <h1>{props.name}</h1>
)

const Part = ({part}) => (
  <p>
    {part.name}{part.exercises}
  </p>
)

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}


const Total = (props) => {
  console.log(props)

  let sum = 0

  for (let index = 0; index < props.parts.length; index++) {
    sum += props.parts[index].exercises
  }

  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}

      />
    </div>
  )
}

export default App