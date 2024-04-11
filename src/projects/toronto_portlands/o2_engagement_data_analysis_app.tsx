import { Project_Entry } from "../../utils/types"

export const o2_engagement_data_analysis_app : Project_Entry = {
    Project_Name: "Internal Web Application for Engagement Data Analysis and Coding",
    card_description: <Description />,
    card_tags: [
        'MERN Stack',
        'React Query',
        'REST APIs',
        'Machine Learning',
    ],
    // this is optional, you can omit this
    // modal_content: <ModalContent />
}

function Description() {
    return (
        <>
            Internal Web based application for handling open-ended comments collected through engagement surveys. 
            This tool effectively process and categorize the responses from these surveys, 
            integrating some machine learning techniques to streamline the process of categorizing data by providing automated suggestions for tags,
            and enabling planners to create insightful reports based on the results of both quantitative data and coded comments.
        </>
    )
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

