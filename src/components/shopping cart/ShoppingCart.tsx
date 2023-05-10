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
    "pk_test_51N5ZgrCngNzB7I6mYJGsMlWvjLWPGnFPUQxJQUVipfcTroeOGsgnTprbjOsVo0yd0oo00U0rlOaNN22AMtKXJn2600aHDs85FD"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res: any = await stripePayment({
        userId: userId,
        products: itemsArray,
      });

      console.log(res);

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
        Your are being redirected to payment page...
      </p>
    );
  } else if (isError) {
    <p className="cart__loading-message">
      Something went wrong, please try again later.
    </p>;
  } else {
    content = (
      <>
        <button
          className="cart__close-button"
          onClick={() => setOpen(false)}
          aria-label="close button"
        >
          <GrClose className="cart__close-icon" />
        </button>
        <div className="cart__content">
          {itemsArray.length !== 0 ? (
            <div className="cart__full-cart">
              <h2 className="cart__full-cart-title">Cart:</h2>
              <div className="cart__full-cart-content">
                <ul className="cart__full-cart-item-list">
                  {itemsArray.map((item) => (
                    <CartItem key={item.itemCartId} item={item} />
                  ))}
                </ul>
                <p className="cart__full-cart-total-price">
                  Total price: {totalPrice.reduce((a, b) => a + b, 0)} zł
                </p>
                <div className="cart__full-cart-buttons-container">
                  <Link to="/shop">
                    <button
                      className="cart__full-cart-button"
                      onClick={() => setOpen(false)}
                    >
                      Continue shopping
                    </button>
                  </Link>
                  <button
                    className="cart__full-cart-button"
                    onClick={() => handlePayment()}
                  >
                    Go to payment
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart__empty-cart-container">
              <h2 className="cart__empty-cart-message">Your cart is empty!</h2>
              <Link to="/shop">
                <button
                  className="cart__empty-cart-button"
                  onClick={() => setOpen(false)}
                >
                  Start shopping
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
