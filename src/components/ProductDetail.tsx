import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SingleItemProps } from "../features/api/apiSlice/extenedApiSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  addToCart,
  CartItemsProps,
} from "../features/shopping-cart-slice/shoppingCartSlice";
import { RootState } from "../redux/store";
import {
  useLazyGetUserWishListItemsQuery,
  useUpdateItemForUsersMutation,
} from "../features/api/apiUploadSlice/athorizationApiSlice";
import SizeButton from "./SizeButton";
import useToastCreator from "../hooks/useToastCreator";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { from, itemId } = location.state;
  const item: SingleItemProps = from;

  const itemQuantity = useAppSelector(
    (state: RootState) => state.shoppingCart.itemQuantity
  );

  const [chosenSize, setChosenSize] = useState<string>("");

  const itemData: CartItemsProps = {
    itemQuantity: itemQuantity,
    // Creating unique id for items with the same id by different sizes
    itemId: item?.id,
    itemCartId: `${item.id + chosenSize}`,
    itemSize: chosenSize,
    itemUrl: item?.attributes?.previewImg?.data?.attributes?.url,
    itemName: item?.attributes?.name,
    itemPrice: item?.attributes?.price as number,
  };

  // Save items on server side
  const userAuth = useAppSelector((state: RootState) => state.authSlice);

  const [getUserWishListItems] = useLazyGetUserWishListItemsQuery();

  const [updateItemsForUsers] = useUpdateItemForUsersMutation();

  const handleItemSave = async (itemId: number) => {
    const { data: userWishlist, isSuccess } = await getUserWishListItems(
      userAuth.id as number,
      false
    );

    if (isSuccess) {
      let updatedUserWishList = userWishlist;

      if (updatedUserWishList === null) {
        updatedUserWishList = [];
        updatedUserWishList.push(itemId);
        useToastCreator("Zapisano przedmiot", "success");
      } else if (!updatedUserWishList.find((id) => id === itemId)) {
        updatedUserWishList = [...updatedUserWishList, itemId];
        useToastCreator("Zapisano przedmiot", "success");
      } else {
        useToastCreator("Przedmiot został juz zapisany", "error");
      }

      try {
        await updateItemsForUsers({
          userId: userAuth.id,
          wishlistItems: updatedUserWishList,
        });
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <section className="product-detail">
      <div className="product-detail__container">
        <div className="product-detail__gallery">
          <picture>
            <source
              srcSet={
                import.meta.env.VITE_UPLOAD_URL +
                item?.attributes?.images?.data[currentImg]?.attributes?.formats
                  ?.large?.url
              }
              media="(min-width: 1000px)"
              className="product-detail__main-img"
            />
            <source
              srcSet={
                import.meta.env.VITE_UPLOAD_URL +
                item?.attributes?.images?.data[currentImg]?.attributes?.formats
                  ?.medium?.url
              }
              media="(min-width: 600px)"
              className="product-detail__main-img"
            />
            <img
              src={
                import.meta.env.VITE_UPLOAD_URL +
                item?.attributes?.images?.data[currentImg]?.attributes?.formats
                  ?.small?.url
              }
              className="product-detail__main-img"
              alt="product"
            />
          </picture>
          <div className="product-detail__thumbnails">
            {item?.attributes?.images?.data.map((img: any, i: number) => {
              return (
                <img
                  key={i}
                  src={
                    import.meta.env.VITE_UPLOAD_URL +
                    img?.attributes?.formats?.thumbnail?.url
                  }
                  alt="product thumbnail"
                  className="product-detail__thumbnail-img"
                  onClick={() => setCurrentImg(i)}
                />
              );
            })}
          </div>
        </div>
        <div className="product-detail__content">
          <h1 className="product-detail__name">{item.attributes.name}</h1>

          <div className="product-detail__price-container">
            <p className="product-detail__price">{item?.attributes.price} zł</p>
            <p className="product-detail__old-price">
              {item?.attributes.oldPrice}
              {item?.attributes.oldPrice ? "zł" : ""}
            </p>
          </div>
          <div className="product-detail__size-wrapper">
            <div className="product-detail__size-container">
              <p className="product-detail__size-title">Wybierz rozmiar</p>
              <div className="single-product__buttons-container">
                {item?.attributes.sizes.split(",").map((size, i) => (
                  <SizeButton
                    key={i}
                    size={size}
                    chosenSize={chosenSize}
                    setChosenSize={setChosenSize}
                  />
                ))}
              </div>
            </div>
            <p
              onClick={() => navigate("/faq/size-guide", { replace: true })}
              className="product-detail__size-table"
            >
              Tabela rozmiarów
            </p>
          </div>
          <div className="product-detail__button-wrapper">
            <button
              className="product-detail__add-to-cart-button"
              onClick={() =>
                itemData.itemSize === ""
                  ? useToastCreator("Wybierz rozmiar", "error")
                  : dispatch(addToCart(itemData))
              }
            >
              Dodaj do koszyka
            </button>

            <button
              className="product-detail__wishlist-button"
              onClick={() =>
                userAuth.username === null
                  ? useToastCreator(
                      "Zaloguj się aby zapisać przedmiot",
                      "error"
                    )
                  : handleItemSave(itemId)
              }
            >
              Dodaj do ulubionych
            </button>
          </div>
          <p className="product-detail__desc">
            {item?.attributes?.description}
          </p>
          <div className="product-detail__desc2">
            {item?.attributes?.desc2?.split(",").map((item, i) => (
              <p key={i} className="product-detail__tag">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
