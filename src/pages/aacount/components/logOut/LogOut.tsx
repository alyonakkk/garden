import React from "react";
import styled from "styled-components";

const Link = styled.a`
  padding: 16px;

  display: flex;
  justify-content: center;

  color: #fe6a69;
  font-size: 14px;
  font-weight: 800;

  background-color: #f3f4f0;
  border: 2px solid #383838;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const LogOut: React.FC = () => {
  function handleButton(): void {
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
  }

  return (
    <Link href="/" onClick={handleButton} type="button">
      Выйти
    </Link>
  );
};

export default LogOut;
