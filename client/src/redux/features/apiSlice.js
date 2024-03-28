import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://linkster-mern.onrender.com",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
