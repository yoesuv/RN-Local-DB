import Realm from "realm";
import { UserSchema } from "./user-schema";

export async function initRealm(): Promise<Realm> {
     return await Realm.open({
        path: "rn_local_db",
        schema: [ UserSchema ],
    })
}
