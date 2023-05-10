import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { CartItemsProps } from "../features/shopping-cart-slice/shoppingCartSlice";
import { useGetFilterItemsQuery } from "../features/api/apiSlice/extenedApiSlice";
import { EntityId } from "@reduxjs/toolkit";
import { ActiveFiltersType } from "../features/filterSlice/filterSlice";
import { RootState } from "../redux/store";
import useMediaQuery from "../hooks/useMediaQuery";
import SizeButtonQuickAdd from "./SizeButtonQuickAdd";

interface Props {
  itemId: EntityId;
  filterActive: ActiveFiltersType;
}

const SingleProduct: React.FC<Props> = ({ itemId, filterActive }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  const { item } = useGetFilterItemsQuery(filterActive, {
    selectFromResult: ({ data }) => ({ item: data?.entities[itemId] }),
  });

  const itemQuantity = useAppSelector(
    (state: RootState) => state.shoppingCart.itemQuantity
  );

  const itemData: CartItemsProps = {
    itemQuantity: itemQuantity,
    // Creating unique id for items with the same id by different sizes
    itemId: item?.id as number,
    itemCartId: "",
    itemSize: "",
    itemUrl: item?.attributes?.previewImg?.data?.attributes?.url,
    itemName: item?.attributes?.name,
    itemPrice: item?.attributes?.price as number,
  };

  return (
    <li className="single-product">
      {item?.attributes.isNew ? (
        <p className="single-product__new-collection">New collection</p>
      ) : (
        false
      )}
      <Link to={`:${item?.id}`} state={{ from: item, itemId: itemId }}>
        <img
          src={
            import.meta.env.VITE_UPLOAD_URL +
            item?.attributes?.previewImg?.data?.attributes?.url
          }
          alt="product"
          className="single-product__img"
        />
      </Link>
      <div className="single-product__content">
        <h2 className="single-product__name">{item?.attributes.name}</h2>
        <div className="single-product__price-container">
          <p className="single-product__price">{item?.attributes.price} zł</p>
          <p className="single-product__old-price">
            {item?.attributes.oldPrice} {item?.attributes.oldPrice ? "zł" : ""}
          </p>
        </div>
        {matches && (
          <>
            <p className="single-product__quick-add">Quick Add</p>
            <div className="single-product__buttons-container">
              {item?.attributes.sizes.split(",").map((size, i) => (
                <SizeButtonQuickAdd key={i} itemData={itemData} size={size} />
              ))}
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default SingleProduct;
