import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import LandingIntro from './sections/LandingIntro/LandingIntro'
import About from './sections/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='snap-y snap-mandatory'>
        <ScrollSectionPane children={<LandingIntro />} />
        <ScrollSectionPane children={<About />} />
        {/* <div className='snap-end bg-red-400 w-full h-[100vh]'>

        </div> */}


      </div>
    </div>
  )
}

function ScrollSectionPane({ children }) {
  return (
    <div className='snap-start'>
      {children}
    </div>
  )
}

export default App
