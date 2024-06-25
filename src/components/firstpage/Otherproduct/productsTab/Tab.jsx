import React from "react";
// import styles from "../../../style/products/productsTab.module.css";

function Tab(props) {
  const { tab, index, activeTab, setActiveTab } = props;

  function handleClick() {
    setActiveTab(index);
  }


  return (
    <li
      onClick={handleClick}
      className="flex h-[30px] bg-black text-white p-3 justify-center items-center rounded-3xl"
    >
      {tab}
    </li>
  );
}

export default Tab;
