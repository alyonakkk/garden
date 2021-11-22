import StoreItem from "./StoreItem";
import { connect } from "react-redux";
import {
  setActiveStore,
  setShopData,
  setOrder,
  fetchShopDataGET,
} from "../../../../store/actions";
import { useEffect, useState } from "react";
import storeList from "../../storeList.module.css";
import blackBC from "../../img/black.png";
import greenBC from "../../img/green.png";
import yellowBC from "../../img/yellow.png";
import blueBC from "../../img/blue.png";
import redBC from "../../img/red.png";
import grassyBC from "../../img/grassy.png";
import orangeBC from "../../img/orange.png";
import { ShopDataItemType, StyleDataType } from "../../../../helpers/getTypes";
import { RootState } from "../../../../store/store";
import styled from "styled-components";

interface IStoreList {
  shopData: ShopDataItemType[];
  fetchShopDataGET: (url: string) => void;
}

const Wrapper = styled.div`
  padding-right: 20px;

  height: calc(100vh - 68px - 70px - 40px);
  overflow: auto;
`;

const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const StoreList: React.FC<IStoreList> = ({ shopData, fetchShopDataGET }) => {
  const styleData: StyleDataType[] = [
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
  let [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    fetchShopDataGET("/catalog/");
    getDateTime();
  }, []);

  function getDateTime(): void {
    const hour = new Date().getHours();
    if (hour >= 23 || hour < 8) {
      setClose(true);
    } else {
      setClose(false);
    }
  }

  function renderStoreItem() {
    return shopData.map(
      ({ address, name, slug }: ShopDataItemType, index: number) => {
        return (
          <StoreItem
            address={address}
            name={name}
            slug={slug}
            styleData={styleData[index]}
            close={close}
            key={index}
          />
        );
      }
    );
  }

  return (
    <Wrapper>
      <List>{renderStoreItem()}</List>
    </Wrapper>
  );
};

const mapStateToProps = ({ stores }: RootState) => {
  return {
    shopData: stores.shopData,
    activeStore: stores.activeStore,
  };
};

const mapDispatchToProps = {
  setActiveStore,
  setShopData,
  setOrder,
  fetchShopDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreList);
