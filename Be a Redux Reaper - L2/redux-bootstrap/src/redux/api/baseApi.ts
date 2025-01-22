import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // must import from react

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["task"], // tags maintains caching and performs smooth UI update after post operation
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["task"],
    }),
    createTask: builder.mutation({
      // without get all are mutation
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi; // for query we will destructure obj for mutation we will destructure array
