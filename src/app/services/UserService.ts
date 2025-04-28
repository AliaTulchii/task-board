import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    })
})