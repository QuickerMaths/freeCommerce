import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type OrderResponseType = {
  data: {
    id: number;
    attributes: {
      stripeId: string;
      userId: string;
    };
  }[];
};

export const ordersApiSlice = createApi({
  reducerPath: "ordersApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getPaymentHistory: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      transformResponse: (response: OrderResponseType, meta, arg) => {
        const userOrders = response.data.filter(
          (item) => item.attributes.userId === arg.toString()
        );

        return userOrders;
      },
    }),
    stripePayment: builder.mutation({
      query: ({ products, userId }) => ({
        url: "/orders",
        method: "POST",
        body: { products, userId },
      }),
    }),
  }),
});

export const { useStripePaymentMutation, useGetPaymentHistoryQuery } =
  ordersApiSlice;
