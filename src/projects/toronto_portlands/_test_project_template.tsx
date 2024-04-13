import { useState } from "react";
import { Project_Entry } from "../../utils/types"

export const test_project: Project_Entry = {
    Project_Name: "This is a test project",
    card_description: <Description />,
    card_tags: [
        'add a tag here'

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Story Sense App",
            url: "https://yamagata-developers-society.github.io/blog/react-hooks-slide-in-modal/"
        }
    ]
}

function Description() {
    const shorten = true
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        Web-based surveys utilizing ArcGIS maps, enabling users to add features such as points, polygons, and polylines, along with leaving comments and classifying them.
        These were primarily used in parallel with in person engagement to gather public feedback on area amenities, with clients including Mississauga, Kelowna, Grimsby, Toronto, etc.
        Below are example links of public online engagement that are currently ongoing.
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

