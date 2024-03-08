import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import holder from '../../assets/profile.jpg'

export default function LandingIntro() {

    return (
        <div className="flex justify-center mt-40 my-16 h-[50vh]">
            <div className="h-[600px] w-[800px]" style={{ backgroundColor: "#ECE7E1" }}>
            </div>
            <div className="absolute h-[600px] flex gap-32 items-center">
                <div className="flex flex-col gap-8 max-w-[500px]">
                    <label className="text-6xl">Full Stack Software Developer</label>
                    <section className="text-xl">Lorem Ipsum is simply has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</section>
                    <button className="text-start text-xl font-semibold">CHECK OUT MY WORK</button>
                    <div className="flex flex-row gap-10 text-4xl ml-20 mt-6">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div>
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