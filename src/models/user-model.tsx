export interface UserModel {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUserModel(json: string): UserModel {
        return JSON.parse(json);
    }

    public static userModelToJson(value: UserModel): string {
        return JSON.stringify(value);
    }
}