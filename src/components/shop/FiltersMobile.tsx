import React from "react";
import SubCategoriesFilters from "./SubCategoriesFilters";
import CollectionsFilters from "./CollectionsFilters";
import {
  useGetSubCategoriesQuery,
  useGetCollectionsQuery,
} from "../../features/api/apiSlice/extenedApiSlice";
import { GrClose } from "react-icons/gr";

interface Props {
  setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filtersOpen: boolean;
}

const FiltersMobile: React.FC<Props> = ({ setFiltersOpen, filtersOpen }) => {
  const { data: subCategoriesData } =
    useGetSubCategoriesQuery("getSubCategories");

  const { data: collectionData } = useGetCollectionsQuery("getCollections");

  return (
    <div
      className={`shop__filters-container--mobile ${
        filtersOpen ? "filter-open" : ""
      }`}
    >
      <button
        className="shop__filters-close-button--mobile"
        onClick={() => setFiltersOpen(false)}
      >
        <GrClose className="shop__filters-close-icon--mobile" />
      </button>
      <div className="shop__filters-flex-wrapper">
        <div className="shop__collection-filters-container">
          <h3 className="shop__collection-title">Kolekcje</h3>
          <div className="shop__collection-filters">
            {collectionData?.data.map((collection) => (
              <CollectionsFilters key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
        <div className="shop__sub-categories-filters">
          <h3 className="shop__sub-categories-title">Kategorie</h3>
          <div className="shop__sub-categories-wrapper">
            {subCategoriesData?.data.map((subCategory) => (
              <SubCategoriesFilters
                key={subCategory.id}
                subCategory={subCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersMobile;
