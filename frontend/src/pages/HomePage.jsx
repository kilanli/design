import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
