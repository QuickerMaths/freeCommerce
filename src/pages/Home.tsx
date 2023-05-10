import React from "react";
import HomeGrid from "../components/home/HomeGrid";
import HomeHeader from "../components/home/HomeHeader";
import HomeNew from "../components/home/HomeNew";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      <HomeGrid />
      <HomeNew />
    </main>
  );
};

export default Home;
