export const UserSchema = {
    name: "users",
    properties: {
        id: "number",
        name: "string",
        username: "string",
        email: "string",
        phone: "string",
        website: "string",
    },
    primaryKey: "id",
};