import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import coverImage from './Emoji-Phone-Unlock-Cover.png'

export const aframe_emoji_AR_phone_unlock: Project_Entry = {
    Project_Name: "Emoji AR Phone Lock Screen",
    card_description: <Description />,
    card_tags: [
        'Augmented Reality for the web',
        'AFrame',
        'HTML & Javascript',
        'Sketching',
        'Ideation',
        'Brainstorming',

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Try it on glitch! (best with a phone)",
            url: "https://emoji-unlock-final.glitch.me/"
        },
        {
            label: "Emoji AR Unlock Video Demo",
            url: "https://drive.google.com/file/d/1OhbxbxyRad5xboW3mQ0rNx7tvLJYWJHK/view?usp=sharing"
        }
    ],
    card_image: coverImage
}

function Description() {
    const shorten = false
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        The concept was to create an alternative "slide to unlock" interface for the mobile phone, making use of touch input and sensor input. Unlock your phone using Emoji AR Unlock
        which uses your phone's gyroscope for you to select 
        emojis floating in the real-world environment as your passcode!
    </>
    const descriptionHTMLShort = <>
        Web-based surveys utilizing ArcGIS maps, enabling users to add features such as points, polygons, and polylines, along with leaving comments and classifying them.
        These were primarily used in parallel with in person engagement
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

