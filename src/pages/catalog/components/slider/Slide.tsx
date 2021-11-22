import { connect } from "react-redux";
import countProd from "../../../../helpers/countProd";
import { RootState } from "../../../../store/store";
import { OrderItemType } from "../../../../helpers/getTypes";
import styled from "styled-components";
import icon from "../img/coffee-latte.png";

interface ISlide {
  title: string;
  price: string;
  slug: string;
  order: OrderItemType[];
}

const SlideEl = styled.div`
  width: max-content;

  color: #000000;
  background-color: #383838;
  border-radius: 15px;
  filter: drop-shadow(2px 2px 2px #00000040);

  cursor: pointer;
`;

const Content = styled.div`
  padding: 12px 4px;

  display: flex;
  align-items: center;
  gap: 6px;

  background-color: #f3f4f0;
  border: 2px solid #383838;
  border-radius: 15px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  background-image: url(${icon});
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 800;
  line-height: 16px;
`;

const Wrapper = styled.div`
  padding: 4px 10px;

  display: flex;
  justify-content: space-between;

  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
`;

const Count = styled.p`
  color: #ffb92a;
`;

const Price = styled.p`
  color: #ffffff;
`;

const Slide: React.FC<ISlide> = ({ title, price, slug, order }) => {
  const prodCount = countProd(order, slug);

  return (
    <>
      <SlideEl>
        <Content>
          <Icon></Icon>
          <Title>{title}</Title>
        </Content>
        <Wrapper>
          <Count>{prodCount !== 0 ? `x${prodCount}` : null}</Count>
          <Price>{price} ₽</Price>
        </Wrapper>
      </SlideEl>
    </>
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    order: main.order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
