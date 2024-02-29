type APIResponse<Data> = {
    data: Data,
    isError: boolean
}

const response: APIResponse<
    { 
        page: number,
        perPage: number,
        totalPages: number,
        totalItems: number,
        items: Array<
        { 
            id: string, 
            collectionId: any,
            collectionName: string, 
            username: string, 
            verified: boolean, 
            emailVisibility: boolean, 
            email: string, 
            created: string, 
            updated: string,
            name: string,
            avatar: string
        }>
    }
    > = {
        data: {
            page: 1,
            perPage: 30,
            totalPages: 1,
            totalItems : 2,
            items : [
                {
                id : "RECORD_ID",
                collectionId : "_pb_users_auth_",
                collectionName : "users",
                username : "username123",
                verified : false,
                emailVisibility: true,
                email: "test@example.com",
                created: "2022-01-01 01:00:00.123Z",
                updated: "2022-01-01 23:59:59.456Z",
                name: "test",
                avatar: "filename.jpg"
                },
                {
                id: "RECORD_ID",
                collectionId: "_pb_users_auth_",
                collectionName: "users",
                username: "username123",
                verified: false,
                emailVisibility: true,
                email: "test@example.com",
                created: "2022-01-01 01:00:00.123Z",
                updated: "2022-01-01 23:59:59.456Z",
                name: "test",
                avatar: "filename.jpg"
                }
            ]
        },
        isError: false
}