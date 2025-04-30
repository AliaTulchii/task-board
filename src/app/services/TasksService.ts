import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../../features/tasks/types";

export const taskApi = createApi({
  reducerPath: 'taskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<ITask[], number>({
      query: (limit: number = 5) => ({
        url: '/todos',
        params: {
            _limit: limit
        }
    })
  })
})
})