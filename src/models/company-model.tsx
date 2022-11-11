import { TB_COMPANY } from "../data/constants";

export class CompanyModel {

    public static schema: Realm.ObjectSchema = {
        name: TB_COMPANY,
        embedded: true,
        properties: {
            name: "string",
            catchPhrase: "string",
            bs: "string",
        },
    }

    name!:        string;
    catchPhrase!: string;
    bs!:          string;
}