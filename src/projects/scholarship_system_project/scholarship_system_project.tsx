import { useState } from "react";
import { Project_Entry } from "../../utils/types"
import coverImage from './ScholarshipLogin.png'

export const scholarship_system_project : Project_Entry = {
    Project_Name: "Scholarship System Project",
    card_description: <Description />,
    card_tags: [
        'Java',
        'JavaFX',
        'Object-Oriented Programming',

    ],
    // this is optional, you can omit this
    modal_content: <ModalContent />,
    links: [
        {
            label: "Scholarship System Video Demo",
            url: "https://drive.google.com/file/d/1U3gqrVLHH7AHQ_P0ngBruOSNkaw4fuFc/view?usp=sharing"
        },
        {
            label: "Github Repository",
            url: "https://github.com/shaiRos/Scholarship-System"
        }
    ],
    card_image:coverImage
}

function Description() {
    const shorten = true
    const [showFull, setShowFull] = useState(false);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const descriptionHTMLFull = <>
       (2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project.
                The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.)
                and overall, following through an agile software development process. My role in the project was to implement the front end of the desktop application in JavaFX. It is a fully functioning system with an implemented database.
    </>
    const descriptionHTMLShort = <>
        (2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project.
                The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.)
                and overall
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

