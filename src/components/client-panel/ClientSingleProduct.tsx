import React from "react";
import { EntityId } from "@reduxjs/toolkit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useGetItemsQuery } from "../../features/api/apiSlice/extenedApiSlice";
import { useUpdateItemForUsersMutation } from "../../features/api/apiUploadSlice/athorizationApiSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";

interface Props {
  itemId: EntityId | number;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
  rerender: boolean;
  wishlist: number[];
}

const ClientSingleProduct: React.FC<Props> = ({
  itemId,
  setRerender,
  rerender,
  wishlist,
}) => {
  const { item } = useGetItemsQuery("", {
    selectFromResult: ({ data }) => ({ item: data?.entities[itemId] }),
  });

  const userAuth = useAppSelector((state: RootState) => state.authSlice);

  const [updateItemForUsers] = useUpdateItemForUsersMutation();

  const handleDelete = async () => {
    const updatedWishlist = wishlist?.filter((id) => id !== itemId);

    console.log(updatedWishlist);

    try {
      await updateItemForUsers({
        userId: userAuth.id,
        wishlistItems: updatedWishlist,
      });
      setRerender(!rerender);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <li className="client-single-product">
      <div className="client-single-product__wrapper">
        <Link
          to={`products/:${item?.id}`}
          state={{ from: item, itemId: itemId }}
        >
          <LazyLoadImage
            effect="blur"
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item?.attributes?.previewImg?.data?.attributes?.url
            }
            alt="product"
            className="client-single-product__img"
          />
        </Link>
        <div className="client-single-product__content">
          <h2 className="client-single-product__title">
            {item?.attributes?.name}
          </h2>
          <p className="client-single-product__price">
            {item?.attributes?.price} zł
          </p>
        </div>
        <button
          className="client-single-product__button"
          onClick={() => handleDelete()}
        >
          Usuń
        </button>
      </div>
    </li>
  );
};

export default ClientSingleProduct;
