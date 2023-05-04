import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { GrClose } from "react-icons/gr";
import { loadStripe } from "@stripe/stripe-js";
import { useStripePaymentMutation } from "../../features/api/ordersApi/ordersApiSlice";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ShoppingCart: React.FC<Props> = ({ setOpen, isOpen }) => {
  const userId = useAppSelector((state) => state.authSlice.id);
  const itemsArray = useAppSelector((state) => state.shoppingCart.itemsArray);

  let totalPrice: number[] = [];

  itemsArray.map((item) => totalPrice.push(item.itemPrice * item.itemQuantity));

  const [stripePayment, { isLoading, isSuccess, isError }] =
    useStripePaymentMutation();

  const stripePromise = loadStripe(
    "pk_live_51MlhSDIXFmUq08Lye33tdmA4GyaqJcQDOpW1zC6gxjmCiAELVLNG0QoexK6X0Tqcn9AmsUxTUStn07LQtiNSeO8U000tzaQz3g"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res: any = await stripePayment({
        userId: userId,
        products: itemsArray,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  let content;

  if (isLoading || isSuccess) {
    content = (
      <p className="cart__loading-message">
        Zaraz zostaniesz przeniesiony na strone płatności...
      </p>
    );
  } else if (isError) {
    <p className="cart__loading-message">
      Coś poszło nie tak spróbuj ponownie później
    </p>;
  } else {
    content = (
      <>
        <button className="cart__close-button" onClick={() => setOpen(false)}>
          <GrClose className="cart__close-icon" />
        </button>
        <div className="cart__content">
          {itemsArray.length !== 0 ? (
            <div className="cart__full-cart">
              <h2 className="cart__full-cart-title">Koszyk:</h2>
              <div className="cart__full-cart-content">
                <ul className="cart__full-cart-item-list">
                  {itemsArray.map((item) => (
                    <CartItem key={item.itemCartId} item={item} />
                  ))}
                </ul>
                <p className="cart__full-cart-total-price">
                  Koszt: {totalPrice.reduce((a, b) => a + b, 0)} zł
                </p>
                <div className="cart__full-cart-buttons-container">
                  <Link to="/shop">
                    <button
                      className="cart__full-cart-button"
                      onClick={() => setOpen(false)}
                    >
                      Kontynuj zakupy
                    </button>
                  </Link>
                  <button
                    className="cart__full-cart-button"
                    onClick={() => handlePayment()}
                  >
                    Przejdź do płatności
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__empty-cart-container">
              <h2 className="cart__empty-cart-message">
                Twój koszyk jest pusty
              </h2>
              <Link to="/shop">
                <button
                  className="cart__empty-cart-button"
                  onClick={() => setOpen(false)}
                >
                  Przejdź do sklepu
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <section className={`cart ${isOpen ? "is-open" : ""}`}>
      <div className="cart__container">{content}</div>
    </section>
  );
};

export default ShoppingCart;
