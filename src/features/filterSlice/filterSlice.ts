import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ActiveFiltersType = {
  category: string;
  subcategory: string;
  collection: string;
};

const initialState: ActiveFiltersType = sessionStorage.getItem("activeFilters")
  ? JSON.parse(sessionStorage.getItem("activeFilters") || "{}")
  : {
      category: "",
      subcategory: "",
      collection: "",
    };

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    handleCategoryFilter: (state, action: PayloadAction<string>) => {
      if (state.category === action.payload) {
        state.category = "";
      } else {
        state.category = action.payload;
      }
    },
    handleCollectionFilter: (state, action: PayloadAction<string>) => {
      if (state.collection === action.payload) {
        state.collection = "";
      } else {
        state.collection = action.payload;
      }
    },
    handleSubCategoryFilter: (state, action: PayloadAction<string>) => {
      if (state.subcategory === action.payload) {
        state.subcategory = "";
      } else {
        state.subcategory = action.payload;
      }
    },
  },
});

export const {
  handleCategoryFilter,
  handleCollectionFilter,
  handleSubCategoryFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
