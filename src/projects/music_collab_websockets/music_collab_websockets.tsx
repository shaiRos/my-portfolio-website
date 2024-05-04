import { useState } from "react";
import { Project_Entry } from "../utils/types"
import coverImage from './music-collab-websockets-cover.png'

export const music_collab_websockets: Project_Entry = {
    Project_Name: "Music-Collab with Web Sockets",
    card_description: <Description />,
    card_tags: [
        'Web Sockets',
        'HTML & Javascript',
        'Adobe XD',
        'Sketching',
        'Ideation',
        'Brainstorming',

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Try the game on glitch",
            url: "https://music-collab.glitch.me/"
        },
        {
            label: "Music-Collab Video Demo",
            url: "https://drive.google.com/file/d/1OMQ7meporZiHLs7L0RInveKlmGlU9q6N/view?usp=sharing"
        }
    ],
    card_image: [coverImage]
}

function Description() {
    const shorten = false
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        For this Project, we were tasked to create a novel interface that involves remote comunication and collaboration with other people. 
        With my group, we created the Music Collaboration app where you can collaborate with your friends online to create music in real time! 
    </>
    const descriptionHTMLShort = <>
    </>


    if (!shorten) return descriptionHTMLFull

    return (
        <div className="transition-all duration-500 ease-out">
            {!showFull ? (
                <>
                    <p>{descriptionHTMLShort}...</p>
                    <button className="text-main_dark" onClick={toggleShowFull}>Show more</button>
                </>
            ) : (
                <>
                    <p>{descriptionHTMLFull}</p>
                    <button className="text-main_dark" onClick={toggleShowFull}>Show Less</button>
                </>
            )}
        </div>
    );

}

function ModalContent() {
    return (
        <div>
            <h1>
                Title
            </h1>
        </div>
    )
}

