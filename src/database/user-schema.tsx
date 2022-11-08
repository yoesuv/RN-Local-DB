export const UserSchema = {
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
};