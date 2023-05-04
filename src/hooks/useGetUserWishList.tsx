import React, { useEffect, useState } from "react";
import { useLazyGetUserWishListItemsQuery } from "../features/api/apiUploadSlice/athorizationApiSlice";
import { RootState } from "../redux/store";
import { useAppSelector } from "./reduxHooks";

const useGetUserWishList = (rerender: boolean) => {
  const [wishlist, setWishlist] = useState<number[]>();

  const userId = useAppSelector((state: RootState) => state.authSlice.id);

  const [getUserWishListItems] = useLazyGetUserWishListItemsQuery();

  useEffect(() => {
    const getWishlist = async (userId: number) => {
      const { data, isSuccess } = await getUserWishListItems(userId, false);

      if (isSuccess) setWishlist(data as number[]);
    };

    getWishlist(userId as number);
  }, [rerender]);

  return wishlist;
};

export default useGetUserWishList;
