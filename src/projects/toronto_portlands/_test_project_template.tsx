import { Project_Entry } from "../../utils/types"

export const test_project : Project_Entry = {
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
    return (
        <>
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

