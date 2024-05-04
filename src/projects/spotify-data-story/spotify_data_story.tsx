import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import coverImage from './data-story-spotify-coverimg.jpg'

export const spotify_data_story: Project_Entry = {
    Project_Name: "Data Story: Spotify Top 2000 Songs",
    card_description: <Description />,
    card_tags: [
        'Data Wrangling',
        'Data Visualization',
        'Data Analysis with Python',
        'Tableau',

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Data Story: Spotify Top 2000 Songs",
            url: "https://shainamr.notion.site/CPSC-599-87-Data-Story-Project-Spotify-Top-2000-songs-1815437c4ef74251b3a7c0040156c364?pvs=4"
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
        A data story on "the top 2000 songs of Spotify" dataset from kaggle. Created as my final project for a data analysis course in University of Calgary.
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

