import Categories from "../components/Categories/Categories";
import Products2 from "../components/Products/Products2";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import React from "react";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products2 />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default ShopPage;
