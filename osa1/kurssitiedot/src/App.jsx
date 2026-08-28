const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}
      </p>
      <p>
        {props.part2}
      </p>
      <p>
        {props.part3}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Total Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}
      
      part2={part2}
      
      part3={part3}
      />
      <Total 

      />
    </div>
  )
}

export default App