import React from "react";
import Tab from "./Tab";
import { pants } from "../../../../Data/productsPageData";
// import styles from "../../../style/products/productsTab.module.css";

function ProductsTab(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <div className="flex ">
      <ul className="flex justify-center h-full w-full gap-5 cursor-pointer">
        {pants.map(function (tab, index) {
          return (
            <Tab
              key={index}
              tab={tab}
              index={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsTab;
