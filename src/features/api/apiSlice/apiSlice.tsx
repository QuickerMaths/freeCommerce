import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
    },
  }),
  tagTypes: ["Items", "Collections", "SubCategories"],
  endpoints: (builder) => ({}),
});
