import styled from "styled-components";
import icon from "./img/check_red.png";

interface ICheckBoxModification {
  item: { title: string };
  changeCheckBox: () => void;
  isChecked: () => boolean;
  isDisabled: () => boolean;
}

interface IDisable {
  disable: boolean;
}

interface ICheck {
  check: boolean;
}

const Text = styled.label<IDisable>`
  display: flex;
  align-items: center;
  gap: 10px;
  ${(props) =>
    props.disable ? "color: #959595; text-decoration: line-through;" : null}
`;

const Icon = styled.div<ICheck>`
  position: absolute;
  left: 2px;
  bottom: 2px;

  display: ${(props) => (props.check ? "block" : "none")};
  width: 20px;
  height: 15px;

  background-image: url(${icon});
  background-repeat: no-repeat;
`;

const CheckBox = styled.input`
  position: absolute;

  opacity: 0;
`;

const New = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  background-color: #f3f4f0;
  border: 2px solid #383838;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const CheckBoxModification: React.FC<ICheckBoxModification> = ({
  item,
  changeCheckBox,
  isChecked,
  isDisabled,
}) => {
  return (
    <Text disable={isDisabled()} key={item.title}>
      <New>
        <Icon check={isChecked()}></Icon>
      </New>
      <CheckBox
        type="checkbox"
        onChange={changeCheckBox}
        checked={isChecked()}
        disabled={isDisabled()}
      />
      {item.title}
    </Text>
  );
};

export default CheckBoxModification;
