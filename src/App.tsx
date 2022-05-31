import { useState } from 'react'
import Header from './Components/Header'
import Selector from './Components/Selector'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Selector/>
    </div>
  )
}

export default App
