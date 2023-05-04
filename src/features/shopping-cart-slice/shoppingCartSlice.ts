import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useToastCreator from "../../hooks/useToastCreator";

export type InitialStateProps = {
  itemQuantity: number;
  itemsArray: CartItemsProps[];
  itemsInCart: number;
};

export type CartItemsProps = {
  itemQuantity: number;
  itemSize: string;
  itemCartId: string;
  itemId: number;
  itemUrl: string | undefined;
  itemName: string | undefined;
  itemPrice: number;
};

const initialState: InitialStateProps = {
  itemQuantity: 1,
  itemsArray: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "{}")
    : [],
  itemsInCart: localStorage.getItem("itemsInCart")
    ? JSON.parse(localStorage.getItem("itemsInCart") || "{}")
    : 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    increment: (state) => {
      state.itemQuantity += 1;
    },
    decrement: (state) => {
      if (state.itemQuantity > 1) {
        state.itemQuantity -= 1;
      }
    },
    addToCart: (state, action: PayloadAction<CartItemsProps>) => {
      if (
        !state.itemsArray.find(
          (item) => item.itemCartId === action.payload.itemCartId
        )
      ) {
        const {
          itemQuantity,
          itemSize,
          itemId,
          itemName,
          itemUrl,
          itemPrice,
          itemCartId,
        } = action.payload;

        state.itemsArray.push({
          itemQuantity,
          itemSize,
          itemId,
          itemCartId,
          itemUrl,
          itemName,
          itemPrice,
        });
        state.itemsInCart = state.itemsArray.length;
        useToastCreator("Przedmiot został dodany do koszyka", "success");
      } else {
        useToastCreator("Przedmiot jest juz w koszyku", "error");
      }
      state.itemQuantity = 1;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.itemsArray = state.itemsArray.filter(
        (item) => item.itemCartId !== action.payload
      );
      state.itemsInCart = state.itemsArray.length;
    },
    incrementItemQuantityInCart: (
      state,
      action: PayloadAction<CartItemsProps>
    ) => {
      state.itemsArray.find(
        (item) =>
          item.itemCartId === action.payload.itemCartId &&
          (item.itemQuantity += 1)
      );
    },
    decrementItemQuantityInCart: (
      state,
      action: PayloadAction<CartItemsProps>
    ) => {
      state.itemsArray.find(
        (item) =>
          item.itemCartId === action.payload.itemCartId &&
          item.itemQuantity > 1 &&
          (item.itemQuantity -= 1)
      );
    },
    reset: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("itemsInCart");
      state.itemsArray = [];
      state.itemsInCart = 0;
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  removeFromCart,
  incrementItemQuantityInCart,
  decrementItemQuantityInCart,
  reset,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
