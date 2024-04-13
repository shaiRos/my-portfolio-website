import { Project_Entry } from "../../utils/types"

export const toronto_portlands : Project_Entry = {
    Project_Name: "Story Stream App",
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
            label: "Portlands StoryStream",
            url: "https://engage.o2design.com/TorontoPortlands/app/"
        }
    ]
}

function Description() {
    return (
        <>
            Winning submission for the
             "A New River Innovation Challenge" by WATERFRONToronto. Designed for Waterfront Toronto, O2's Port Lands Story Stream (formerly named 'Story Sense') is an online platform that usees real-time data and collective storytelling to foster connections between visitors and emerging ecosystems at the new mouth of the Don River.
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

