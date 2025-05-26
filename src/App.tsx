import { JSXElementConstructor, useEffect, useRef, useState } from 'react'
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
  const projectsRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const scrollRefs = {
    projectsRef: projectsRef,
    aboutRef: aboutRef,
    contactRef: contactRef
  }

  useEffect(() => {
    if (displayModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'

    }
  }, [displayModal])

  return (
    <div>
      <Header scrollRefs={scrollRefs} />
      {/* <div className='snap-y snap-mandatory'> */}
      <div>
        <ScrollSectionPane reff={projectsRef} children={<LandingIntro scrollRefs={scrollRefs} />} />
        <ScrollSectionPane reff={aboutRef} children={<About />} />
        <ScrollSectionPane reff={projectsRef} children={<Projects setDisplayModal={setDisplayModal} setModalContent={setModalContent}/>} />
        <ScrollSectionPane reff={contactRef} children={<Contact />} />


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



function ScrollSectionPane({ children,reff } : {children: any,reff?: any}) {
  return (
    // <div className='snap-start' ref={reff}>
    <div ref={reff}>
      {children}
    </div>
  )
}

export default App
