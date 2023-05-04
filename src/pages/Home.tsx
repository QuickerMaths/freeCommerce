import React from "react";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeGrid from "../components/home/HomeGrid";
import HomeHeader from "../components/home/HomeHeader";
import HomeNew from "../components/home/HomeNew";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      <HomeGrid />
      <HomeNew />
      <HomeFAQ />
    </main>
  );
};

export default Home;
