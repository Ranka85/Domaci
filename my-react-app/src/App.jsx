import { useState } from 'react'
import { RickAndMorty } from './assets/Components/RickyAndMorty'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <RickAndMorty/>
}

export default App
