import { useState } from "react";
import { Project_Entry } from "../../utils/types"

export const o2_engagement_data_analysis_app: Project_Entry = {
    Project_Name: "Internal Web Application for Engagement Data Analysis and Coding",
    card_description: <Description />,
    card_tags: [
        'MERN Stack',
        'React Query',
        'REST APIs',
        'Database Management',
        'Machine Learning',
    ],
    // this is optional, you can omit this
    // modal_content: <ModalContent />
}

function Description() {
    const shorten = true
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
        Internal Web based application for handling open-ended comments collected through engagement surveys.
        This tool effectively process and categorize the responses from these surveys,
        integrating some machine learning techniques to streamline the process of categorizing data by providing automated suggestions for tags,
        and enabling planners to create insightful reports based on the results of both quantitative data and coded comments.
    </>
    const descriptionHTMLShort = <>
        Internal Web based application for handling open-ended comments collected through engagement surveys.
        This tool effectively process and categorize the responses from these surveys,
        integrating some machine learning
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

