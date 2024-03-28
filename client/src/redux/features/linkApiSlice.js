import { apiSlice } from "./apiSlice";

const Link_URL = "/api/v1/links";

export const linkApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allLinks: builder.mutation({
      query: () => ({
        url: `${Link_URL}/`,
        method: "GET",
      }),
    }),
    addLink: builder.mutation({
      query: (data) => ({
        url: `${Link_URL}/`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getUserLinks: builder.mutation({
      query: () => ({
        url: `${Link_URL}/`,
        method: "GET",
        credentials: "include",
      }),
    }),
    deleteLink: builder.mutation({
      query: (id) => ({
        url: `${Link_URL}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    updateLink: builder.mutation({
      query: (data) => ({
        url: `${Link_URL}/${data._id}`,
        method: "PATCH",
        body: data.newData,
        credentials: "include",
      }),
    }),
    allUsers: builder.mutation({
      query: () => ({
        url: `/api/v1/public/all`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddLinkMutation,
  useAllLinksMutation,
  useGetUserLinksMutation,
  useDeleteLinkMutation,
  useUpdateLinkMutation,
  useAllUsersMutation,
} = linkApiSlice;
