import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppStartListening } from "../../redux/store";
import { CartItemsProps } from "../shopping-cart-slice/shoppingCartSlice";
import {
  addToCart,
  decrementItemQuantityInCart,
  incrementItemQuantityInCart,
  removeFromCart,
} from "../shopping-cart-slice/shoppingCartSlice";
import {
  handleCategoryFilter,
  handleCollectionFilter,
  handleSubCategoryFilter,
} from "../filterSlice/filterSlice";

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

let itemsToLocalStorage: CartItemsProps[] = [];

startAppListening({
  actionCreator: addToCart,
  effect: (action, currentState) => {
    if (localStorage.getItem("cartItems")) {
      itemsToLocalStorage = JSON.parse(
        localStorage.getItem("cartItems") || "{}"
      );
      if (
        !itemsToLocalStorage.find(
          (item) => item.itemCartId === action.payload.itemCartId
        )
      )
        itemsToLocalStorage.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(itemsToLocalStorage));
    } else {
      itemsToLocalStorage.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(itemsToLocalStorage));
    }
    localStorage.setItem(
      "itemsInCart",
      JSON.stringify(currentState.getState().shoppingCart.itemsInCart)
    );
  },
});

startAppListening({
  actionCreator: removeFromCart,
  effect: (action, currentState) => {
    itemsToLocalStorage = itemsToLocalStorage.filter(
      (item) => item.itemCartId !== action.payload
    );
    localStorage.setItem("cartItems", JSON.stringify(itemsToLocalStorage));
    localStorage.setItem(
      "itemsInCart",
      JSON.stringify(currentState.getState().shoppingCart.itemsInCart)
    );
  },
});

startAppListening({
  matcher: isAnyOf(incrementItemQuantityInCart, decrementItemQuantityInCart),
  effect: (action, currentState) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(currentState.getState().shoppingCart.itemsArray)
    );
  },
});

startAppListening({
  matcher: isAnyOf(
    handleCategoryFilter,
    handleCollectionFilter,
    handleSubCategoryFilter
  ),
  effect: (action, currentState) => {
    localStorage.setItem(
      "activeFilters",
      JSON.stringify(currentState.getState().filterSlice)
    );
  },
});
