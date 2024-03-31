import { Project_Entry } from "../../utils/types"

export const toronto_portlands : Project_Entry = {
    Project_Name: "Story Sense App",
    card_description: <Description />,
    card_tags: [
        "React",
        "Express",
        "REST APIs",
        "Prototyping"
    ]
}

function Description() {
    return (
        <>
            Winning submission for the <a href="https://portlandsto.ca/a-new-river-innovation-challenge/" target="_blank">
             "A New River Innovation Challenge" by WATERFRONToronto.
            </a> A prototype web platform to share ecological and environmental data gathered at the new river mouth on the Port Lands site in Toronto. 
        </>
    )
}

