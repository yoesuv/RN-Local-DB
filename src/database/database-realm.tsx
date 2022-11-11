import Realm from "realm";
import { UserModel } from "../models/user-model";
import { CompanyModel } from "../models/company-model";

export async function initRealm(): Promise<Realm> {
     return await Realm.open({
        path: "rn_local_db",
        schema: [ UserModel.schema, CompanyModel.schema ],
    })
}
