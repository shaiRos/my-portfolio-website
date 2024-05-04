import { useState } from "react";
import { Project_Entry } from "../utils/types"
import coverImage from './toio-cleanse-cover.png'
import coverImage2 from './toio-cleanse-cover2.png'

export const toio_cleanse: Project_Entry = {
    Project_Name: "ToioCleanse, Physical Prototyping with Toio cubes",
    card_description: <Description />,
    card_tags: [
        'Toio cubes',
        'Arduino',
        'Physical Prototyping',
        'Sketching',
        'Ideation',
        'Brainstorming',

    ],
    card_image: [coverImage,coverImage2],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "ToioCleanse Video Demo",
            url: "https://drive.google.com/file/d/12b6WrbJm3lHdcp5zSMEBm9Y2SE_GAiJ8/view?usp=sharing"
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
        The concept was to create a physical prototype that solves an everyday problem. With the combination of toio robots and Arduino, our concept was to create a table cleaner that travels across the table and cleans it using a variety of attachments such as a brush, sponge and scooper.
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

