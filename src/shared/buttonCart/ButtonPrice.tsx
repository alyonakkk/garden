import styled from "styled-components";

interface IButtonPrice {
  price: number;
}

const Price = styled.p`
  padding: 10px;

  font-size: 12px;
  font-weight: 800;

  color: #f3f4f0;
`;

const ButtonPrice: React.FC<IButtonPrice> = ({ price }) => {
  return <Price>{price} P</Price>;
};

export default ButtonPrice;
