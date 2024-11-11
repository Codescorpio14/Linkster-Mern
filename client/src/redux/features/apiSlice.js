import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  // "https://linkster-mern.onrender.com",
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
