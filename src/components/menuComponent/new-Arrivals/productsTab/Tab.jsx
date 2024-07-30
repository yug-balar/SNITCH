import React from "react";
import { useParams } from "react-router-dom";
import { arrivaltab } from "../../../../Data/newArrivals";
// import styles from "../../../style/products/productsTab.module.css";

function Tab(props) {
  const { tab, index, activeTab, setActiveTab } = props;

  function handleClick() {
    setActiveTab(index);
  }


  const data = tab.extraData
  return (
    <div>
      <div className="flex flex-col gap-2 h-[200px]">
        {tab.title}
        <div className="flex flex-col gap-2 overflow-y-scroll h-[200px]">

          {data.map((value) => {
            return (
              <p className="text-[12px] cursor-pointer font-light" onClick={() => {
                setActiveTab(value.title)
              }}>{value.title}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Tab;
