import { TB_ADDRESS, TB_GEO } from "../data/constants";
import { GeoModel } from "./geo-model";

export class AddressModel {

    public static schema: Realm.ObjectSchema = {
        name: TB_ADDRESS,
        embedded: true,
        properties: {
            street: "string",
            suite: "string",
            city: "string",
            zipcode: "string",
            geo: `${TB_GEO}?`,
        },
    }

    street?:  string;
    suite?:   string;
    city?:    string;
    zipcode?: string;
    geo?:     GeoModel;
}