import React, { useState } from "react";
import useGetUserWishList from "../../hooks/useGetUserWishList";
import ClientSingleProduct from "./ClientSingleProduct";

const ClientProducts = () => {
  const [rerender, setRerender] = useState<boolean>(false);

  const wishlist = useGetUserWishList(rerender);

  return (
    <section className="client-products">
      <div className="client-products__container">
        <h2 className="client-products__title">Saved Products</h2>
        <ul className="client-products__list">
          {wishlist?.map((itemId) => (
            <ClientSingleProduct
              key={itemId}
              itemId={itemId}
              wishlist={wishlist}
              setRerender={setRerender}
              rerender={rerender}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientProducts;
