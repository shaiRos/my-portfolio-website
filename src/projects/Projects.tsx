import { Project_Entry } from "../utils/types"
import { test_project } from "./_test_project_template"
import { aframe_emoji_AR_phone_unlock } from "./aframe_emoji_AR_phone_unlock/aframe_emoji_AR_phone_unlock"
import { memory_mix_app_g3dmaps } from "./memory_mix_app_g3dmaps/memory_mix_app_g3dmaps"
import { music_collab_websockets } from "./music_collab_websockets/music_collab_websockets"
import { o2_engagement_data_analysis_app } from "./o2_engagement_data_analaysis/o2_engagement_data_analysis_app"
import { online_web_based_map_engagement_surveys } from "./online_web_based_map_engagement_surveys/online_web_based_map_engagement_surveys"
import { pixel_story_to } from "./pixel_story_to/pixel_story_to"
import { spotify_data_story } from "./spotify-data-story/spotify_data_story"
import { toio_cleanse } from "./toioCleanse/toio_cleanse"
import { toronto_portlands } from "./toronto_portlands/toronto_portlands"
import { web_based_dashboards } from "./web_based_dashboards/web_based_dashboards"

export const ProjectsConfig : Project_Entry[] = [
    // test_project,
    memory_mix_app_g3dmaps,
    toronto_portlands,
    pixel_story_to,
    spotify_data_story,
    aframe_emoji_AR_phone_unlock,
    music_collab_websockets,
    toio_cleanse,
    o2_engagement_data_analysis_app,
    online_web_based_map_engagement_surveys,
    web_based_dashboards,
]