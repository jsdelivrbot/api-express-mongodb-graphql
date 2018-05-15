export default `
    type Error{
        path: String!
        message: String!
    }

    type Response{
        ok: Boolean!
        errors: [Error]
        token: String
    }
`
