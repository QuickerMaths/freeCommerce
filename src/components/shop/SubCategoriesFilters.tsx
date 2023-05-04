import React from "react";
import { FilterType } from "../../features/api/apiSlice/extenedApiSlice";
import { handleSubCategoryFilter } from "../../features/filterSlice/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";

interface Props {
  subCategory: FilterType;
}

const SubCategoriesFilters: React.FC<Props> = ({ subCategory }) => {
  const dispatch = useAppDispatch();

  const active = useAppSelector(
    (state: RootState) => state.filterSlice.subcategory
  );

  return (
    <button
      className={`shop__sub-category-button ${
        active === subCategory.attributes.type ? "filter-active" : ""
      }`}
      onClick={() =>
        dispatch(handleSubCategoryFilter(subCategory.attributes.type))
      }
    >
      {subCategory.attributes.name}
    </button>
  );
};

export default SubCategoriesFilters;
