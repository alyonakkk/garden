import StoreItem from "./StoreItem";
import { connect } from "react-redux";
import {
  setActiveStore,
  setShopData,
  fetchDataGET,
} from "../../../../store/actions";
import { useEffect } from "react";
import storeList from "../../storeList.module.css";
import blackBC from "../../img/black.png";
import greenBC from "../../img/green.png";
import yellowBC from "../../img/yellow.png";
import blueBC from "../../img/blue.png";
import redBC from "../../img/red.png";
import grassyBC from "../../img/grassy.png";
import orangeBC from "../../img/orange.png";

function StoreList({ shopData, setActiveStore, setShopData, fetchDataGET }) {
  const styleData = [
    {
      color: "#2A2A2A",
      image: blackBC,
      opacity: "6%",
    },
    {
      color: "#B1D465",
      image: greenBC,
      opacity: "20%",
    },
    {
      color: "#FFC633",
      image: yellowBC,
      opacity: "22%",
    },
    {
      color: "#5DD1B7",
      image: blueBC,
      opacity: "24%",
    },
    {
      color: "#FE6A69",
      image: redBC,
      opacity: "8%",
    },
    {
      color: "#8BA682",
      image: grassyBC,
      opacity: "12%",
    },
    {
      color: "#FFA825",
      image: orangeBC,
      opacity: "16%",
    },
  ];

  useEffect(() => {
    fetchDataGET("http://localhost:3001/api/catalog/", setShopData);
  }, []);

  function renderStoreItem() {
    return shopData.map(({ address, name, slug }, index) => {
      function handleStoreItem() {
        setActiveStore(slug);
      }

      return (
        <StoreItem
          address={address}
          name={name}
          slug={slug}
          styleData={styleData[index]}
          onClick={handleStoreItem}
          key={index}
        />
      );
    });
  }

  return (
    <div className={storeList.store_list_wrapper}>
      <ul className={storeList.store_list}>{renderStoreItem()}</ul>
    </div>
  );
}

const mapStateToProps = ({ shopData }) => {
  return {
    shopData,
  };
};

const mapDispatchToProps = {
  setActiveStore,
  setShopData,
  fetchDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreList);
