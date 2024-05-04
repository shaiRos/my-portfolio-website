import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import holder from '../../assets/profile.jpg'

export default function LandingIntro({scrollRefs}) {
    const scrollToRef = (myRef) => window.scrollTo(0, myRef.current.offsetTop - 5);

    return (
        <div className="flex justify-center md:mt-40 my-16 md:h-[50vh]">
            <div className="h-[800px] md:h-[600px] w-[800px] hidden md:block" style={{ backgroundColor: "#ECE7E1" }}>
            </div>
            <div className="md:absolute h-[600px] md:flex gap-24 items-center">
                <div className="flex flex-col gap-8 max-w-[500px]">
                    <label className="text-5xl font-bold">Full Stack Software Developer</label>
                    <section className="text-xl">
                    A software developer with a strong passion for design, art, technology, and innovation.
                    
                        {/* Lorem Ipsum is simply has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                        </section>
                    <button className="text-start text-xl font-semibold" onClick={() => scrollToRef(scrollRefs.projectsRef)}>CHECK OUT MY WORK</button>
                    <div className="flex flex-row gap-10 text-4xl md:ml-20 md:mt-6">
                        <a href="mailto:shaina.mrosell@gmail.com">

                            <button>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </a>
                        <a href="https://github.com/shaiRos" target="_blank">

                            <button>
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/shainamrosell/" target="_blank">

                            <button>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        width={400}
                        height={400}
                        src={holder}
                        className="img-fluid rounded-full hoverable shadow-sm"
                        alt="Self Portrait"
                    />
                    {/* <div className="h-[250px] w-[250px] bg-red-300"></div> */}
                </div>
            </div>
        </div>
    )
}