import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (page = 1) => `movies?_page=${page}&_limit=10`,
      providesTags: ["Movies"],
    }),
    createMovie: builder.mutation({
      query: (title) => ({
        url: `movies`,
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["Movies"],
    }),
    updateMovie: builder.mutation({
      query: ({ id, title }) => ({
        url: `movies/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Movies"],
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Movies"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useCreateMovieMutation,
  useUpdateMovieMutation,
  useDeleteMovieMutation,
} = jsonServerApi;
