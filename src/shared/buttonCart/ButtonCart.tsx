import React from "react";
import ButtonCounter from "./ButtonCounter";
import ButtonPrice from "./ButtonPrice";
import styled from "styled-components";

interface IButtonCart {
  count: number;
  price: number;
  handleAdd: (e: React.MouseEvent) => void;
  handleRemove: (e: React.MouseEvent) => void;
  black: boolean;
  activeNav?: string;
}

interface ICard {
  black: boolean;
}

const Card = styled.div<ICard>`
  display: flex;
  align-items: center;
  width: max-content;

  background-color: ${(props) => (props.black ? "#242424" : "#383838")};
  border-radius: 10px;
`;

const ButtonCart: React.FC<IButtonCart> = ({
  count,
  price = 0,
  handleAdd,
  handleRemove,
  activeNav,
  black,
}) => {
  return (
    <Card black={black}>
      <ButtonCounter
        count={count}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        activeNav={activeNav!}
      />
      <ButtonPrice price={price} />
    </Card>
  );
};

export default ButtonCart;
