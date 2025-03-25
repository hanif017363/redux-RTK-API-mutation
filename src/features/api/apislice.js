import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = 5) => `/posts?_limit=${limit}`,
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.query({
      query: (data) => ({
        URL: "/posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostQuery } = appSlice;
