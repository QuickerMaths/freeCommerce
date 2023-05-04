import React from "react";
import {
  addToCart,
  CartItemsProps,
} from "../features/shopping-cart-slice/shoppingCartSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

interface Props {
  itemData: CartItemsProps;
  size: string;
}

const SizeButtonQuickAdd: React.FC<Props> = ({ itemData, size }) => {
  const dispatch = useAppDispatch();

  const {
    itemQuantity,
    itemId,
    itemCartId,
    itemSize,
    itemUrl,
    itemName,
    itemPrice,
  } = itemData;

  return (
    <button
      className="single-product__size-button"
      onClick={() =>
        dispatch(
          addToCart({
            itemQuantity,
            itemName,
            itemCartId: itemId + size,
            itemId,
            itemSize: size,
            itemUrl,
            itemPrice,
          })
        )
      }
    >
      {size}
    </button>
  );
};

export default SizeButtonQuickAdd;
