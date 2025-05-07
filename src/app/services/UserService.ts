import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../features/users/types";
import { BASE_API } from "./Service.Constants";

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: "/users",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
