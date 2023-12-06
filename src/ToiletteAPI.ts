import { PointGeo } from "./PointGeo";

/**
 * Interface for the toilette API
 */
export interface ToiletteAPI {
    commune : string;
    code_postal : string;
    point_geo : PointGeo;
    id : string;
    lon : string;
    tags: null | string;
    tags_opening_hours: null | string;
    tags_created_by: null | string;
    tags_source: null | string;
}