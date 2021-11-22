import styled from "styled-components";

interface IInput {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEl = styled.input`
  padding: 4px 0;
  margin-bottom: 20px;

  width: 100%;

  background-color: transparent;
  border: none;
  border-bottom: 3px solid #383838;
  outline: none;

  &::placeholder {
    color: #959595;
    font-size: 14px;
    font-weight: 800;
  }
`;

const Input: React.FC<IInput> = ({ ...props }) => {
  return <InputEl type="text" {...props} />;
};

export default Input;
