import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import card_image from './bikesharetoronto_2025_engagement_site.png'

export const online_web_based_map_engagement_surveys : Project_Entry = {
    Project_Name: "Online Web Based Maps & Surveys for Public Engagement",
    card_description: <Description />,
    card_tags: [
        'React',
        'CouchDB',
        'SurveyJS',
        'LeafletJS'
        
    ],
    // this is optional, you can omit this
    // modal_content: <ModalContent />,
    links: [
        {
            label: "Bikeshare Toronto | Community Engagement",
            url: "https://engagebikeshareto.com/app_yr3_archived"
        },
    ],
    card_image: card_image
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

