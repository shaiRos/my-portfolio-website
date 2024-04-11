import { Project_Entry } from "../../utils/types"

export const toronto_portlands : Project_Entry = {
    Project_Name: "Story Sense App",
    card_description: <Description />,
    card_tags: [
        "React",
        "Express",
        "REST APIs",
        "Prototyping"
    ],
    modal_content: <ModalContent />,
    links: [
        {
            label: "A New River Innovation Challenge",
            url: "https://portlandsto.ca/a-new-river-innovation-challenge/"
        },
        {
            label: "Story Sense App",
            url: "https://engage.o2design.com/TorontoPortlands/app/"
        }
    ]
}

function Description() {
    return (
        <>
            Winning submission for the
             "A New River Innovation Challenge" by WATERFRONToronto. A prototype web platform to share ecological and environmental data gathered at the new river mouth on the Port Lands site in Toronto. 
        </>
    )
}

function ModalContent() {
    return (
        <div>
            <h1>
                Toronto Portlands
            </h1>
        </div>
    )
}

