import React from "react";
import Tab from "./Tab";
// import styles from "../../../style/products/productsTab.module.css";
import { arrivaltab } from "../../../../Data/newArrivals";

function ProductsTab(props) {
  const { activeTab, setActiveTab } = props;
  const menudata = [
    {
      title: "NEW ARRIVALS",
      link: "arrivals"
    },
    {
      title: "BEST SELLING",
      link: "arrivals"

    },
    {
      title: "SNITCH LUXE",
      link: "arrivals"

    },
    {
      title: "SUITS & BLAZERS",
      link: "arrivals"

    },
    {
      title: "SHOP",
      link: "arrivals"

    },
    {
      title: "TRACK ORDER",
      link: "arrivals"

    },
    {
      title: "PLACE A RETURN / EXCHANGE REQUEST",
      link: "arrivals"

    },
    {
      title: "COUSTOMER SUPPORT",
      link: "arrivals"

    },
    {
      title: "VISIT MORE",
      link: "arrivals"

    },
    {
      title: "RELOVE",
      link: "arrivals"

    }
  ]
  return (
    <div className="h-full w-full flex flex-col gap-3 bg-white">
      <div className="flex flex-col gap-3 border-b-[1px] pl-6 border-[#ECEDF0]">
        <div className="flex flex-col w-full h-full gap-1 p-2">
          {arrivaltab.map(function (tab, index) {
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
        </div>
      </div>
    </div>

  );
}

export default ProductsTab;
