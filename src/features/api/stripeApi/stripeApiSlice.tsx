import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stripeApiSlice = createApi({
  reducerPath: "stripeApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.stripe.com",
  }),
  endpoints: (builder) => ({
    getStripeSession: builder.query({
      query: (sessionId) => ({
        url: `/v1/checkout/sessions/${sessionId}`,
        method: "GET",
        headers: {
          Authorization: `bearer ${import.meta.env.VITE_STRIPE_KEY}`,
        },
      }),
    }),
    getStripeLineItems: builder.query({
      query: (sessionId) => ({
        url: `/v1/checkout/sessions/${sessionId}/line_items`,
        method: "GET",
        headers: {
          Authorization: `bearer ${import.meta.env.VITE_STRIPE_KEY}`,
        },
      }),
    }),
    getStripeProducts: builder.query({
      query: (productId) => ({
        url: `/v1/products/${productId}`,
        method: "GET",
        headers: {
          Authorization: `bearer ${import.meta.env.VITE_STRIPE_KEY}`,
        },
      }),
    }),
  }),
});

export const {
  useGetStripeSessionQuery,
  useGetStripeLineItemsQuery,
  useGetStripeProductsQuery,
} = stripeApiSlice;
