import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import coverImage from './Thumbnail.png'

export const memory_mix_app_g3dmaps: Project_Entry = {
    Project_Name: "Memory Mix App",
    card_description: <Description />,
    card_tags: [
        'Google Maps JavaScript API',
        'Google 3D Maps',
        'React',
        'IndexedDB',

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "DevPost Project Page",
            url: "https://devpost.com/software/memory-mix"
        },
        {
            label: "MemoryMixApp",
            url: "https://memorymix.netlify.app/"
        },
        {
            label: "Hackathon Posting",
            url: "https://google3dmaps.devpost.com/"
        },
    ],
    card_image: coverImage
}

function Description() {
    const shorten = true
    const [showFull, setShowFull] = useState(true);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        An individual project submission for "Google Photorealistic 3D Maps Challenge". Memory Mix lets you upload, organize, and explore your photos on a 3D map, using the Places API to predict locations you've visited, creating a visual journey through your memories.
        Head to the DevPost Project Page linked below for more details about the application including a demo video and pictures.
    </>
    const descriptionHTMLShort = <>
        Submission for "Google Photorealistic 3D Maps Challenge". Memory Mix lets you upload, organize, and explore your photos on a 3D map, using the Places API to predict locations you've visited, and creating a visual journey through your memories.
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

