import styled from "styled-components";
import icon from "./img/check.png";

interface ICheckBoxRules {
  title: string;
  name: string;
  id: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

interface IIcon {
  active: boolean;
}

const Text = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 166px;

  font-size: 12px;
  font-weight: 500;
`;

const New = styled.div`
  position: relative;

  min-width: 20px;
  height: 20px;

  background-color: #f3f4f0;
  border: 2px solid #383838;
  border-radius: 5px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Icon = styled.div<IIcon>`
  position: absolute;
  bottom: 1px;
  left: 1px;

  display: ${(props) => (props.active ? "block" : "none")};
  width: 20px;
  height: 15px;

  background-image: url(${icon});
`;

const CheckBox = styled.input`
  position: absolute;

  opacity: 0;
`;

const CheckBoxRules: React.FC<ICheckBoxRules> = ({
  title,
  name,
  id,
  active,
  setActive,
}) => {
  function handleCheckBox() {
    setActive(!active);
  }

  return (
    <Text>
      <New>
        <Icon active={active}></Icon>
      </New>
      <CheckBox type="checkbox" name={name} id={id} onChange={handleCheckBox} />
      {title}
    </Text>
  );
};

export default CheckBoxRules;
