import { connect } from "react-redux";
import filterOrder from "../../../../helpers/filterOrder";
import { RootState } from "../../../../store/store";
import { ShopDataItemType } from "../../../../helpers/getTypes";
import styled from "styled-components";
import icon from "../../img/location.png";

interface ILocation {
  shopData: ShopDataItemType[];
  activeStore: string;
}

const LocationEl = styled.div`
  margin-bottom: 24px;

  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 40px;
  width: 100%;

  color: #f3f4f0;

  background-color: #383838;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

const IconWrapper = styled.div`
  padding: 2px 4px;

  position: absolute;
  left: -2px;
  top: -1px;

  width: 40px;
  height: 40px;

  border: 2px solid #383838;
  background-color: #f3f4f0;
  border-radius: 50%;
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: center;
`;

const Street = styled.p`
  margin-left: 50px;
`;

const Location: React.FC<ILocation> = ({ shopData, activeStore }) => {
  const store = filterOrder(shopData, activeStore);

  return (
    <LocationEl>
      <IconWrapper>
        <Icon></Icon>
      </IconWrapper>
      <Street>{activeStore.length !== 0 ? store[0]["address"] : ""}</Street>
    </LocationEl>
  );
};

const mapStateToProps = ({ stores }: RootState) => {
  return {
    shopData: stores.shopData,
    activeStore: stores.activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
