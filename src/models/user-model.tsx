import { AddressModel } from "./address-model";
import { CompanyModel } from "./company-model";
import * as Realm from "realm";
import { TB_COMPANY, TB_USERS } from "../data/constants";

export class UserModel {

    public static schema: Realm.ObjectSchema = {
        name: TB_USERS,
        properties: {
            id: "int",
            name: "string",
            username: "string",
            email: "string",
            phone: "string",
            website: "string",
            company: `${TB_COMPANY}?`,
        },
        primaryKey: "id",
    }

    id!:       number;
    name!:     string;
    username!: string;
    email!:    string;
    phone!:    string;
    website!:  string;
    company!:  CompanyModel;
}