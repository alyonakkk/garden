import StoreItem from "./StoreItem";
import { connect } from "react-redux";
import {
  setActiveStore,
  setShopData,
  fetchDataGET,
} from "../../../../store/actions";
import { useEffect } from "react";

function StoreList({ shopData, setActiveStore, setShopData, fetchDataGET }) {
  const colorData = [
    "#2A2A2A",
    "#B1D465",
    "#FFC633",
    "#5DD1B7",
    "#FE6A69",
    "#8BA682",
    "#FFA825",
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
          color={colorData[index]}
          onClick={handleStoreItem}
          key={index}
        />
      );
    });
  }

  return (
    <div className="store">
      <ul className="store__list">{renderStoreItem()}</ul>
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
