import React, { useState } from "react";
import {
  useGetCollectionsQuery,
  useGetFilterItemsQuery,
  useGetSubCategoriesQuery,
} from "../../features/api/apiSlice/extenedApiSlice";
import SingleProduct from "../SingleProduct";
import CollectionsFilters from "./CollectionsFilters";
import SubCategoriesFilters from "./SubCategoriesFilters";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../hooks/reduxHooks";
import FiltersMobile from "./FiltersMobile";
import useMediaQuery from "../../hooks/useMediaQuery";
import LoadingPage from "../../pages/LoadingPage";

const ProductsSection = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  const filtersActive = useAppSelector((state: RootState) => state.filterSlice);

  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const {
    data: filterData,
    isLoading,
    isSuccess,
    isError,
  } = useGetFilterItemsQuery(filtersActive);

  const { data: collectionData } = useGetCollectionsQuery("getCollections");

  const { data: subCategoriesData } =
    useGetSubCategoriesQuery("getSubCategories");

  let content;
  if (isLoading) {
    return <h1 className="loading-products">Loading ...</h1>;
  } else if (isSuccess) {
    content = filterData.ids.map((itemId) => (
      <SingleProduct
        key={itemId}
        itemId={itemId}
        filterActive={filtersActive}
      />
    ));
  } else if (isError) {
    content = <p>error</p>;
  }
  return (
    <section className="shop">
      <div className="shop__container">
        {matches ? (
          <div className="shop__filters-container">
            <div className="shop__collection-filters-container">
              <h3 className="shop__collection-title">Collections</h3>
              <div className="shop__collection-filters">
                {collectionData?.data.map((collection) => (
                  <CollectionsFilters
                    key={collection.id}
                    collection={collection}
                  />
                ))}
              </div>
            </div>
            <div className="shop__sub-categories-filters">
              {subCategoriesData?.data.map((subCategory) => (
                <SubCategoriesFilters
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <button
              className="shop__filter-button"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              Filtry
            </button>
            <FiltersMobile
              setFiltersOpen={setFiltersOpen}
              filtersOpen={filtersOpen}
            />
          </>
        )}
        <ul className="shop__product-list">
          {filterData?.ids.length !== 0 ? (
            content
          ) : (
            <h2 className="loading-products">Products not fount</h2>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProductsSection;
