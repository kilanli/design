import { useState } from "react";
import PropTypes from "prop-types";
import Reviews from "../../reviews/Reviews";
import "./Tabs.css";

const Tabs = ({ singleProduct, setSingleProduct }) => {
  const [activeTab, setActiveTab] = useState("reviews");
  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Yorumlar{" "}
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <Reviews
          active={activeTab === "reviews" ? "content active" : "content"}
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
