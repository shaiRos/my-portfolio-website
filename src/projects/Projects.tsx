import { Project_Entry } from "../utils/types"
import { test_project } from "./toronto_portlands/_test_project_template"
import { aframe_emoji_AR_phone_unlock } from "./toronto_portlands/aframe_emoji_AR_phone_unlock"
import { o2_engagement_data_analysis_app } from "./toronto_portlands/o2_engagement_data_analysis_app"
import { online_web_based_map_engagement_surveys } from "./toronto_portlands/online_web_based_map_engagement_surveys"
import { pixel_story_to } from "./toronto_portlands/pixel_story_to"
import { spotify_data_story } from "./toronto_portlands/spotify_data_story"
import { toronto_portlands } from "./toronto_portlands/toronto_portlands"
import { web_based_dashboards } from "./toronto_portlands/web_based_dashboards"

export const ProjectsConfig : Project_Entry[] = [
    // test_project,
    toronto_portlands,
    pixel_story_to,
    o2_engagement_data_analysis_app,
    online_web_based_map_engagement_surveys,
    web_based_dashboards,
    spotify_data_story,
    aframe_emoji_AR_phone_unlock
]