import { apiSlice } from "../features/api/apiSlice/apiSlice";
import { apiUploadSlice } from "../features/api/apiUploadSlice/apiUploadSlice";
import { listenerMiddleware } from "../features/middleware/middleware";
import shoppingCartReducer from "../features/shopping-cart-slice/shoppingCartSlice";
import filterSliceReducer from "../features/filterSlice/filterSlice";
import countDownSliceReducer from "../features/countdown/countDownSlice";
import authSliceReducer from "../features/authSlice/authSlice";
import type { TypedStartListening } from "@reduxjs/toolkit";
import { ordersApiSlice } from "../features/api/ordersApi/ordersApiSlice";
import { stripeApiSlice } from "../features/api/stripeApi/stripeApiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiUploadSlice.reducerPath]: apiUploadSlice.reducer,
    [ordersApiSlice.reducerPath]: ordersApiSlice.reducer,
    [stripeApiSlice.reducerPath]: stripeApiSlice.reducer,
    shoppingCart: shoppingCartReducer,
    filterSlice: filterSliceReducer,
    countDownSlice: countDownSliceReducer,
    authSlice: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat([
        apiSlice.middleware,
        apiUploadSlice.middleware,
        ordersApiSlice.middleware,
        stripeApiSlice.middleware,
      ]),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
