import { AddressModel } from "./address-model";
import { CompanyModel } from "./company-model";
import * as Realm from "realm";

export class UserModel {

    public static schema: Realm.ObjectSchema = {
        name: "users",
        properties: {
            id: "int",
            name: "string",
            username: "string",
            email: "string",
            phone: "string",
            website: "string",
        },
        primaryKey: "id",
    }

    id!:       number;
    name!:     string;
    username!: string;
    email!:    string;
    phone!:    string;
    website!:  string;
}