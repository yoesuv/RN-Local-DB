import Realm from "realm";
import { UserModel } from "../models/user-model";
import { CompanyModel } from "../models/company-model";
import { AddressModel } from "../models/address-model";

export async function initRealm(): Promise<Realm> {
     return await Realm.open({
        path: "rn_local_db",
        schema: [ UserModel.schema, CompanyModel.schema, AddressModel.schema ],
    })
}
