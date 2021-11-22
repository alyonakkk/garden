import styled from "styled-components";
import icon from "./img/check.png";

interface IRadioCircle {
  title: string;
  name: string;
  id: string;
  active: string;
  setActive: (active: string) => void;
}

interface IIcon {
  active: string;
  id: string;
}

const Text = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 13px;
  font-weight: 800;
`;

const Radio = styled.input`
  position: absolute;

  opacity: 0;
`;

const Icon = styled.div<IIcon>`
  position: absolute;
  left: 2px;
  bottom: 2px;

  display: ${(props) => (props.active === props.id ? "block" : "none")};
  width: 20px;
  height: 15px;

  background-image: url(${icon});
`;

const New = styled.label`
  position: relative;

  width: 20px;
  height: 20px;

  background-color: #f3f4f0;
  border: 2px solid #242424;
  border-radius: 50%;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const RadioCircle: React.FC<IRadioCircle> = ({
  title,
  name,
  id,
  active,
  setActive,
}) => {
  function handleRadio() {
    setActive((active = id));
  }

  return (
    <Text>
      <Radio type="radio" name={name} id={id} onChange={handleRadio} />
      <New>
        <Icon active={active} id={id}></Icon>
      </New>
      {title}
    </Text>
  );
};

export default RadioCircle;
