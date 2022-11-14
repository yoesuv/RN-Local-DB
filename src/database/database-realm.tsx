import Realm from "realm";
import { UserModel } from "../models/user-model";
import { CompanyModel } from "../models/company-model";
import { AddressModel } from "../models/address-model";
import { GeoModel } from "../models/geo-model";

export async function initRealm(): Promise<Realm | never> {
    try {
        return await Realm.open({
            path: "rn_local_db",
            schema: [ UserModel.schema, CompanyModel.schema, AddressModel.schema, GeoModel.schema ],
        })
    } catch (e) {
        throw e;
    }
}
