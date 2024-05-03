import { useState } from "react";
import { Project_Entry } from "../../utils/types"

export const aframe_emoji_AR_phone_unlock: Project_Entry = {
    Project_Name: "Emoji AR Phone Lock Screen",
    card_description: <Description />,
    card_tags: [
        'Augmented Reality for the web',
        'AFrame',
        'HTML & Javascript'

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Try it on glitch!",
            url: "https://emoji-unlock-final.glitch.me/"
        }
    ]
}

function Description() {
    const shorten = false
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        The concept was to create an alternative "slide to unlock" interface for the mobile phone, making use of touch input and sensor input. Emoji AR Unlock uses the phone's gyroscope for you to select 
        emojis floating in the real-world environment! Unlock you're phone by selecting a series of emoji's in the screen.
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

