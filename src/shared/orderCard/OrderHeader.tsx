import styled from "styled-components";

interface IOrderHeader {
  title: string;
  white: boolean;
}

interface ITitleStyle {
  white: boolean;
}

const TitleWrapper = styled.div`
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.p<ITitleStyle>`
  color: ${(props) => (props.white ? "#f3f4f0" : "#959595")};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

const OrderHeader: React.FC<IOrderHeader> = ({ title, white }) => {
  return (
    <TitleWrapper>
      <Title white={white}>{title}</Title>
    </TitleWrapper>
  );
};

export default OrderHeader;
