import React from "react";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  CartItemsProps,
  removeFromCart,
  incrementItemQuantityInCart,
  decrementItemQuantityInCart,
} from "../../features/shopping-cart-slice/shoppingCartSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface Props {
  item: CartItemsProps;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="cart__item">
      <img
        src={import.meta.env.VITE_UPLOAD_URL + item.itemUrl}
        alt="product"
        className="cart__product-img"
      />
      <div className="cart__product-content">
        <div className="cart__product-right-wrapper">
          <h2 className="cart__product-name">{item.itemName}</h2>
          <p className="cart__product-size">Rozmiar: {item.itemSize}</p>

          <div className="cart__product-quantity-container">
            <button
              className="cart__product-quantity-button"
              onClick={() => dispatch(incrementItemQuantityInCart(item))}
            >
              <AiOutlinePlus className="cart__quantity-icon" />
            </button>
            <span className="cart__product-quantity">{item.itemQuantity}</span>
            <button
              className="cart__product-quantity-button"
              onClick={() => dispatch(decrementItemQuantityInCart(item))}
            >
              <AiOutlineMinus className="cart__quantity-icon" />
            </button>
          </div>
        </div>
        <div className="cart__product-left-wrapper">
          <p className="cart__product-price">
            {item?.itemPrice * item?.itemQuantity} zł
          </p>
          <button
            className="cart__remove-button"
            onClick={() => dispatch(removeFromCart(item.itemCartId))}
          >
            Usuń <AiOutlineDelete className="cart__remove-icon" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
