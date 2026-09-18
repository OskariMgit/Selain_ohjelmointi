import { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avarage = (good + bad * -1) / total
  const positive = good / total * 100
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodclick = () => setGood(good+1)
  const handleNeutralclick = () => setNeutral(neutral+1)
  const handleBadclick = () => setBad(bad+1)

  return (
    <div>
      <h1>SODEXON PALAUTE</h1>
      <Button onClick={handleGoodclick} text="HYVÄ" />
      <Button onClick={handleNeutralclick} text="Keski" />
      <Button onClick={handleBadclick} text="Huono" />
      <p>TULOKSET</p>
      <p>good {good}</p>
      <p>keski {neutral}</p>
      <p>huono {bad}</p>
      <Statistics yhteensä={total}></Statistics>
      <Statistics keskiarvo={avarage}></Statistics>
    </div>
  )
}

export default App