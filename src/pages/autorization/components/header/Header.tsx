import React from "react";
import styled from "styled-components";

const Title = styled.p`
  margin-bottom: 32px;

  color: #f3f4f0;
  font-weight: 800;
`;

const Header: React.FC = () => {
  return <Title>Авторизация</Title>;
};

export default Header;
