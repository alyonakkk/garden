import React from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import LogOut from "./components/logOut/LogOut";
import OrderList from "./components/orderList/OrderList";
import styled from "styled-components";

const Account: React.FC = () => {
  const BackGround = styled.div`
    height: 100vh;

    background-color: #027ec2;
  `;

  const Container = styled.div`
    padding: 20px;
  `;

  return (
    <BackGround>
      <Container>
        <Header />
        <Card />
        <OrderList />
        <LogOut />
      </Container>
    </BackGround>
  );
};

export default Account;
