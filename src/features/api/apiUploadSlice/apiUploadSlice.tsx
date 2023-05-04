import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiUploadSlice = createApi({
  reducerPath: "apiUpload",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ["x-requested-with"]: "XMLHttpRequest",
    },
  }),
  endpoints: (builder) => ({}),
});
