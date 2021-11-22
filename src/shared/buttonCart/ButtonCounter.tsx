import styled from "styled-components";

interface IButtonCounter {
  count: number;
  handleAdd: (e: React.MouseEvent) => void;
  handleRemove: (e: React.MouseEvent) => void;
  activeNav?: string | undefined;
}

interface IButton {
  activeNav: string;
}

const ButtonBlock = styled.div<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${(props) => (props.activeNav ? "width: 143px; height: 55px;" : null)}

  background-color: #f3f4f0;
  border-radius: 10px;
`;

const Button = styled.button<IButton>`
  padding: 10px 12px;

  color: ${(props) =>
    props.activeNav
      ? props.activeNav === "information"
        ? " #14ad99"
        : "red"
      : "#14ad99"};
  font-size: 20px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const Counter = styled.div`
  font-size: 12px;
  font-weight: 800;
`;

const ButtonCounter: React.FC<IButtonCounter> = ({
  count,
  handleAdd,
  handleRemove,
  activeNav,
}) => {
  return (
    <ButtonBlock activeNav={activeNav!}>
      <Button activeNav={activeNav!} onClick={handleRemove} type="button">
        -
      </Button>
      <Counter>{count}</Counter>
      <Button activeNav={activeNav!} onClick={handleAdd} type="button">
        +
      </Button>
    </ButtonBlock>
  );
};

export default ButtonCounter;
