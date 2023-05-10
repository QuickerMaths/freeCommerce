import React, { useState } from "react";
import { useGetPaginationItemsQuery } from "../../features/api/apiSlice/extenedApiSlice";
import NewProduct from "../NewProduct";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HomeNew = () => {
  let [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isSuccess } =
    useGetPaginationItemsQuery(page);

  let content;
  if (isLoading) {
    <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.ids.map((itemId) => (
      <NewProduct key={itemId} itemId={itemId} page={page} />
    ));
  } else if (isError) {
    <p>Error 404</p>;
  }

  return (
    <section className="home-new">
      <div className="home-new__container">
        <h2 className="home-new__title">Whats new?</h2>
        <ul className="home-new__content">{content}</ul>
        <div className="home-new__pagination-container">
          <button
            className="home-new__button"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            aria-label="previous"
          >
            <SlArrowLeft className="home-new__arrow" />
          </button>
          <span className="home-new__pagination-count">{page}</span>
          <button
            className="home-new__button"
            disabled={page === data?.meta?.pagination?.pageCount}
            onClick={() => setPage((prev) => prev + 1)}
            aria-label="next"
          >
            <SlArrowRight className="home-new__arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeNew;
