import React, { useEffect, useState } from "react";
import { ClientShippingAddressProps } from "../components/client-panel/ClientShippingAddressForm";
import { useLazyGetUserShippingAddressQuery } from "../features/api/apiUploadSlice/athorizationApiSlice";
import { RootState } from "../redux/store";
import { useAppSelector } from "./reduxHooks";

const useGetUserShippingAddress = () => {
  const [userShippingAddress, setUserShippingAddress] =
    useState<ClientShippingAddressProps>();

  const userId = useAppSelector((state: RootState) => state.authSlice.id);

  const [getUserShippingAddress] = useLazyGetUserShippingAddressQuery();

  useEffect(() => {
    const getShippingAddress = async (userId: number) => {
      const { data, isSuccess } = await getUserShippingAddress(userId, false);

      if (isSuccess) setUserShippingAddress(data);
    };

    getShippingAddress(userId as number);
  }, []);

  return userShippingAddress;
};

export default useGetUserShippingAddress;
