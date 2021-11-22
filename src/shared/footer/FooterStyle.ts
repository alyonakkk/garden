import styled from "styled-components";

const FooterEl = styled.footer`
  padding: 12px 58px;

  bottom: 0;

  width: 100%;
  height: 70px;

  background-color: #242424;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const FooterFlex = styled(FooterEl)`
  padding: 12px 20px;

  display: flex;
  align-items: center;
  gap: 36px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;
`;

const Button = styled.button`
  color: #14ad99;
  font-size: 13px;
  font-weight: 800;

  border: none;

  cursor: pointer;
`;

const ButtonContainet = styled.div`
  display: flex;
  justify-content: center;
  width: 143px;
  height: 55px;
`;

const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;

  color: #959595;
  font-size: 12px;

  cursor: pointer;

  &:hover {
    color: #f3f4f0;
  }
`;

const Price = styled.div`
  padding: 2px 6px 2px 0;

  position: absolute;
  top: -10px;
  right: -50px;

  display: flex;
  align-items: center;
  width: max-content;

  color: #f3f4f0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;

  background-color: #383838;
  border-radius: 10px;
`;

const CounterWrapper = styled.div`
  margin-right: 10px;
  padding: 2px 6px;

  color: #ffc633;

  background-color: #fff;
  border-radius: 50%;
  text-align: center;
`;

const Counter = styled.p`
  width: 8px;
  height: 16px;
`;

export {
  FooterEl,
  FooterFlex,
  List,
  ButtonContainet,
  Item,
  Price,
  CounterWrapper,
  Counter,
  Button,
};
