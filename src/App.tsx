import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import LandingIntro from './sections/LandingIntro/LandingIntro'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalContent,setModalContent] = useState(<></>)

  useEffect(() => {
    if (displayModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'

    }
  }, [displayModal])

  return (
    <div>
      <Header />
      <div className='snap-y snap-mandatory'>
        <ScrollSectionPane children={<LandingIntro />} />
        <ScrollSectionPane children={<About />} />
        <ScrollSectionPane children={<Projects setDisplayModal={setDisplayModal} setModalContent={setModalContent}/>} />
        <ScrollSectionPane children={<Contact />} />


      </div>

      {/* Modal */}
      <div className={`Modal ${displayModal ? "Show" : ""} h-[95%] overflow-y-auto`}>
        <div className='h-full w-full relative overflow-y-auto pt-12'>
          {modalContent}
        </div>
        <button className="Close" onClick={() => setDisplayModal(!displayModal)}>
          Close
        </button>
      </div>
      <div className={`Overlay ${displayModal ? 'Show' : ''}`} onClick={() => setDisplayModal(!displayModal)} />
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
