const Hello = (props) => {
  console.log("hello", props.name)
  return (
    <div>
      <p>Hello {props.name}. you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age = 22
  console.log("hello from komponentti")
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name = "juho1" age = {age}/>
    <Hello name = "juho2" age = {16}/>
    <Hello name = "juho3" age = {69}/>
    <Hello />
  </div>
  )
}

export default App