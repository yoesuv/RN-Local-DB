import { TB_GEO } from "../data/constants";

export class GeoModel {

    public static schema: Realm.ObjectSchema = {
        name: TB_GEO,
        embedded: true,
        properties: {
            lat: "string",
            lng: "string",
        },
    }

    lat?: string;
    lng?: string;
}