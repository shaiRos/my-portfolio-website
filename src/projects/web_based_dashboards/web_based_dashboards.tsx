import { Project_Entry } from "../../utils/types"

export const web_based_dashboards : Project_Entry = {
    Project_Name: "Dashboard Web Applications",
    card_description: <Description />,
    card_tags: [
        'Data Visualization',
        'D3.js',
        'LeafletJS',
        'ArcGIS Maps SDK for JavaScript'
        
    ],
    // this is optional, you can omit this
    // modal_content: <ModalContent />,
    // links: [
    // ]
}

function Description() {
    return (
        <>
            Dashboard applications presenting complex data through interactive graphs and visualizations along with maps using leafletjs or the integration of ArcGIS Maps SDK for JavaScript to use ArcGIS Online items to present mapping and spatial analysis within the application.
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

