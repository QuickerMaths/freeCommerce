import { apiUploadSlice } from "../apiUploadSlice/apiUploadSlice";
import { UserProps } from "../../../pages/RegisterForm";
import { UserLoginProps } from "../../../components/Login";
import { ClientShippingAddressProps } from "../../../components/client-panel/ClientShippingAddressForm";
import { ResetPasswordData } from "../../../pages/ResetPassword";

type UserDataResponse = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: string;
  blocked: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  secondName: string;
  zipCode: string;
  town: string;
  address: string;
  phoneNumber: string;
  savedItems: number[] | null;
};

export const authorizationApiSlice = apiUploadSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserShippingAddress: builder.query<ClientShippingAddressProps, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
    getUserWishListItems: builder.query<number[] | null, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
      transformResponse: (response: UserDataResponse) => {
        const userWishlist = response?.savedItems;
        return userWishlist;
      },
    }),
    checkUserAuth: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      transformResponse: (response: UserDataResponse) => {
        const userData = {
          username: response.username,
          email: response.email,
          id: response.id,
        };
        return userData;
      },
    }),
    registerNewUser: builder.mutation({
      query: (userData: UserProps) => ({
        url: "/auth/local/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userLoginData: UserLoginProps) => ({
        url: "/auth/local",
        method: "POST",
        body: userLoginData,
      }),
    }),
    updateUserData: builder.mutation({
      query: ({ userId, userShippingAddress }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: userShippingAddress,
      }),
    }),
    updateItemForUsers: builder.mutation({
      query: ({ userId, wishlistItems }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: {
          savedItems: wishlistItems,
        },
      }),
    }),
    forgotUserPassword: builder.mutation({
      query: (userEmail: string) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: {
          email: userEmail,
        },
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    sendEmailConfirmation: builder.mutation({
      query: (email: string) => ({
        url: "/auth/send-email-confirmation",
        method: "POST",
        body: { email },
      }),
    }),
    changeUserPassword: builder.mutation({
      query: (resetPasswordData: ResetPasswordData) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: resetPasswordData,
      }),
    }),
  }),
});

export const {
  useLazyGetUserShippingAddressQuery,
  useLazyGetUserWishListItemsQuery,
  useGetUserWishListItemsQuery,
  useCheckUserAuthQuery,
  useRegisterNewUserMutation,
  useLoginUserMutation,
  useUpdateUserDataMutation,
  useUpdateItemForUsersMutation,
  useForgotUserPasswordMutation,
  useLogoutUserMutation,
  useSendEmailConfirmationMutation,
  useChangeUserPasswordMutation,
} = authorizationApiSlice;
