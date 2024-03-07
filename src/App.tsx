import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import LandingIntro from './sections/LandingIntro/LandingIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LandingIntro />
    </>
  )
}

export default App
