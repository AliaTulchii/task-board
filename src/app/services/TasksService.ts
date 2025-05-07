import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../../features/tasks/types";
import { BASE_API } from "./Service.Constants";

export const taskApi = createApi({
  reducerPath: 'taskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: (build) => ({
    fetchAllTasks: build.query<ITask[], number>({
      query: (limit: number = 5) => ({
        url: '/todos',
        params: {
            _limit: limit
        }
    })
  })
})
})