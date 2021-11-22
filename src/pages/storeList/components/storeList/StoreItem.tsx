import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveStore } from "../../../../store/actions";
import { StyleDataType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface IStoreItem {
  address: string;
  name: string;
  slug: string;
  close: boolean;
  styleData: StyleDataType;
  setActiveStore: (activeStore: string) => void;
}

interface ItemStyle {
  color: string;
}

interface BCStyle {
  bc: string;
  opacity: string;
}

const Item = styled.li<ItemStyle>`
  margin-bottom: 12px;

  position: relative;

  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.color};

  border-bottom-right-radius: 15px;
  border-left: none;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.28));

  overflow: hidden;
`;

const BC = styled.div<BCStyle>`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.bc});
  opacity: ${(props) => props.opacity};
`;

const Content = styled.div`
  padding: 10px 10px 10px 20px;

  display: flex;
  justify-content: space-between;
  width: 304px;

  background: #f3f4f0;
  border: 2px solid #242424;
  border-left: none;
  border-bottom-right-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
`;

const Address = styled.p`
  color: #959595;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const InfoWrapper = styled.div`
  width: 54px;

  text-align: right;
`;

const Info = styled.p`
  font-size: 9px;
  font-weight: 800;
  line-height: 12px;
`;

const InfoRed = styled.span`
  color: red;
`;

const Button = styled.div`
  padding: 12px 0;

  display: flex;
  justify-content: center;
  width: 54px;
  height: 100%;

  color: white;

  cursor: pointer;
`;

const StoreItem: React.FC<IStoreItem> = ({
  address,
  name,
  slug,
  close,
  styleData,
  setActiveStore,
}) => {
  function handleStoreLink() {
    setActiveStore(slug);
  }

  return (
    <Item color={styleData.color}>
      <BC bc={styleData.image} opacity={styleData.opacity}></BC>
      <Content>
        <Wrapper>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Wrapper>
        <InfoWrapper>
          {close === true && (
            <Info>
              Закрыто до: <InfoRed>08:00</InfoRed>
            </Info>
          )}
        </InfoWrapper>
      </Content>
      <Link to={`/catalog/${slug}`} onClick={handleStoreLink}>
        <Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7194 9.27591C16.5417 9.09923 16.3012 9.00006 16.0506 9.00006C15.8 9.00006 15.5596 9.09923 15.3818 9.27591L11.9763 12.634L8.61816 9.27591C8.44042 9.09923 8.19999 9.00006 7.94938 9.00006C7.69877 9.00006 7.45834 9.09923 7.2806 9.27591C7.19169 9.3641 7.12112 9.46902 7.07296 9.58462C7.0248 9.70022 7 9.82421 7 9.94944C7 10.0747 7.0248 10.1987 7.07296 10.3143C7.12112 10.4299 7.19169 10.5348 7.2806 10.623L11.3028 14.6451C11.3909 14.734 11.4959 14.8046 11.6115 14.8528C11.7271 14.9009 11.8511 14.9257 11.9763 14.9257C12.1015 14.9257 12.2255 14.9009 12.3411 14.8528C12.4567 14.8046 12.5616 14.734 12.6498 14.6451L16.7194 10.623C16.8083 10.5348 16.8789 10.4299 16.927 10.3143C16.9752 10.1987 17 10.0747 17 9.94944C17 9.82421 16.9752 9.70022 16.927 9.58462C16.8789 9.46902 16.8083 9.3641 16.7194 9.27591Z"
              fill="#F3F4F0"
            />
          </svg>
        </Button>
      </Link>
    </Item>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  setActiveStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreItem);
