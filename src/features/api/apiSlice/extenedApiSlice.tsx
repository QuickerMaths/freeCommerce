import {
  createEntityAdapter,
  Dictionary,
  EntityId,
  EntityState,
} from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";

type ApiItems<T, K> = {
  data: T[];
  meta: K;
};

type PaginationProps = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type SingleItemProps = {
  attributes: {
    categories: {
      data: {
        attributes: {
          type: string;
        };
      };
    };
    createdAt: string;
    description: string;
    desc2: string | undefined;
    images: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
            medium: { url: string };
            small: { url: string };
            thumbnail: { url: string };
          };
        };
        id: number;
      }[];
    };
    isNew: boolean;
    itemQuantityInCart: number | undefined;
    name: string;
    oldPrice?: number;
    price: number;
    publishedAt: string;
    previewImg: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    sizes: string;
    subCategories: {
      data: {
        attributes: {
          type: string;
        };
      }[];
    };
    updatedAt: string;
  };
  id: number;
};

type Filter<K> = {
  data: K[];
};

export type FilterType = {
  id: number;
  attributes: {
    type: string;
    name: string;
  };
};

const itemAdapter = createEntityAdapter<SingleItemProps>({
  selectId: (item) => item.id,
  sortComparer: (a, b) => a.attributes.name.localeCompare(b.attributes.name),
});

const initialState = itemAdapter.getInitialState({
  meta: {
    pagination: {
      page: 0,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    },
  },
});

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query<EntityState<SingleItemProps>, string>({
      query: () => "/products?populate=*",
      transformResponse: (
        response: ApiItems<SingleItemProps, PaginationProps>
      ) => {
        return itemAdapter.setAll(initialState, response.data);
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Items", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Items" as const, id })),
            ]
          : [{ type: "Items", id: "LIST" }],
    }),
    getFilterItems: builder.query<
      EntityState<SingleItemProps>,
      { category: string; subcategory: string; collection: string }
    >({
      query: (arg) => {
        const { category, subcategory, collection } = arg;
        return {
          url: `/products?populate=*&filters[categories][type][$contains]=${category}&filters[collections][type][$contains]=${collection}&filters[sub_categories][type][$contains]=${subcategory}`,
          params: { category, subcategory, collection },
        };
      },
      transformResponse: (
        response: ApiItems<SingleItemProps, PaginationProps>
      ) => {
        const itemsWithQuantity = response.data.map((item) => {
          if (!item.attributes?.itemQuantityInCart) {
            item.attributes.itemQuantityInCart = 1;
          }

          return item;
        });

        return itemAdapter.setAll(initialState, itemsWithQuantity);
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              { type: "Items", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Items" as const, id })),
            ]
          : [{ type: "Items", id: "LIST" }],
    }),
    getPaginationItems: builder.query<
      {
        meta: PaginationProps;
        ids: EntityId[];
        entities: Dictionary<SingleItemProps>;
      },
      number | void
    >({
      query: (page: number) =>
        `/products?populate=*&pagination[page]=${page}&pagination[pageSize]=3`,
      transformResponse: (
        response: ApiItems<SingleItemProps, PaginationProps>
      ) => {
        return itemAdapter.setAll(
          { ...initialState, meta: response.meta },
          response.data
        );
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              ...Object.values(result.entities).map((item) => ({
                type: "Items" as const,
                id: item?.id,
              })),
              { type: "Items", id: "LIST" },
            ]
          : [{ type: "Items", id: "LIST" }],
    }),
    getCollections: builder.query<Filter<FilterType>, string>({
      query: () => "/collections",

      providesTags: (result, error, arg) => [
        { type: "Collections", id: "LIST" },
      ],
    }),
    getSubCategories: builder.query<Filter<FilterType>, string>({
      query: () => "/sub-categories",

      providesTags: (result, error, arg) => [
        { type: "SubCategories", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetFilterItemsQuery,
  useGetPaginationItemsQuery,
  useGetCollectionsQuery,
  useGetSubCategoriesQuery,
} = extendedApiSlice;
