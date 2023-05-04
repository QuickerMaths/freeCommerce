import React from "react";
import { FilterType } from "../../features/api/apiSlice/extenedApiSlice";
import { handleCollectionFilter } from "../../features/filterSlice/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";

interface Props {
  collection: FilterType;
}

const CollectionsFilters: React.FC<Props> = ({ collection }) => {
  const dispatch = useAppDispatch();

  const active = useAppSelector(
    (state: RootState) => state.filterSlice.collection
  );

  return (
    <button
      className={`shop__collection-button ${
        active === collection.attributes.type ? "filter-active" : ""
      }`}
      onClick={() =>
        dispatch(handleCollectionFilter(collection.attributes.type))
      }
    >
      {collection.attributes.name}
    </button>
  );
};

export default CollectionsFilters;
