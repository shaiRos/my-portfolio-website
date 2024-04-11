import { Project_Entry } from "../utils/types"
import { test_project } from "./toronto_portlands/_test_project_template"
import { o2_engagement_data_analysis_app } from "./toronto_portlands/o2_engagement_data_analysis_app"
import { toronto_portlands } from "./toronto_portlands/toronto_portlands"

export const ProjectsConfig : Project_Entry[] = [
    // test_project,
    toronto_portlands,
    o2_engagement_data_analysis_app
]