import styled from "styled-components";

interface IRadio {
  title: string;
  name: string;
  id: string;
  active: string;
  setActive: (active: string) => void;
}

interface IRadioNew {
  active: string;
  id: string;
}

const RadioEl = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;

  width: 100%;
  height: 100%;
`;

const RadioNew = styled.label<IRadioNew>`
  padding: 6px 12px;

  position: relative;

  color: ${(props) => (props.active === props.id ? "#f3f4f0" : "#383838")};
  font-size: 13px;
  font-weight: 800;

  background-color: ${(props) =>
    props.active === props.id ? "#14ad99" : "#f3f4f0"};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 2px solid #383838;
`;

const Radio: React.FC<IRadio> = ({ title, name, id, active, setActive }) => {
  function handleRadio() {
    setActive((active = id));
  }

  return (
    <RadioNew id={id} active={active} onClick={handleRadio}>
      {title}
      <RadioEl name={name} type="radio" />
    </RadioNew>
  );
};

export default Radio;
