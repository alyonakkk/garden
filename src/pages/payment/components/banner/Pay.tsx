import { useState } from "react";
import CheckBoxRules from "../../../../shared/UI/checkbox/CheckBoxRules";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  color: #f3f4f0;

  background-color: #383838;
`;

const Line = styled.div`
  height: 30px;
  width: 8px;

  background: url(./img/dotted.png);
  background-repeat: no-repeat;
`;
const Button = styled.button`
  color: #f3f4f0;
  font-size: 16px;
  font-weight: 800;

  background-color: transparent;
  border: none;

  &:disabled {
    color: #959595;
  }

  &:active {
    color: #14ad99;
  }
`;

const Pay: React.FC = () => {
  let [active, setActive] = useState<boolean>(false);

  return (
    <Container>
      <CheckBoxRules
        title="Согласен с правилами оплаты"
        name="rules"
        id="rules"
        active={active}
        setActive={setActive}
      />
      <Line></Line>
      <Button disabled={!active}>Оплатить</Button>
    </Container>
  );
};

export default Pay;
