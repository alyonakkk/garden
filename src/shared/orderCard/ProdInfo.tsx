import { clickAdd, clickRemove } from "../../helpers/ProdAddRemove";
import { setOrder } from "../../store/actions";
import { connect } from "react-redux";
import { getProd, getProdIndex } from "../../helpers/getProd";
import ButtonCart from "../buttonCart/ButtonCart";
import sumModidfication from "../../helpers/sumModification";
import { RootState } from "../../store/store";
import { OrderItemType } from "../../helpers/getTypes";
import React from "react";
import styled from "styled-components";

interface IProdInfo {
  item: OrderItemType;
  order: OrderItemType[];
  setOrder: (order: any) => void;
}

const Wrapper = styled.div`
  padding: 4px 10px 10px 10px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  color: #f3f4f0;
  font-size: 12px;
  list-style: none;
`;

const ProdInfo: React.FC<IProdInfo> = ({ item, order, setOrder }) => {
  const { slug, price, count, modification } = item;
  const prod: OrderItemType = getProd(order, slug, modification)!;
  const prodIndex: number = getProdIndex(order, slug, modification);
  const totalProdPrice: number = Number(price) + Number(sumModidfication(item));

  function handleAdd(e: React.MouseEvent): void {
    e.preventDefault();

    clickAdd(prod, prodIndex, item, modification, setOrder, order);
  }

  function handleRemove(e: React.MouseEvent): void {
    e.preventDefault();

    clickRemove(prod, prodIndex, order, setOrder);
  }

  function renderModification() {
    return Object.values(modification).map((mod, index) => {
      return mod.value === true && <li key={index}>+ {mod.name}</li>;
    });
  }

  return (
    <Wrapper>
      <List>{renderModification()}</List>
      <ButtonCart
        count={count}
        price={totalProdPrice}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        black={true}
      />
    </Wrapper>
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    order: main.order,
  };
};

const mapDispatchToProps = {
  setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdInfo);
