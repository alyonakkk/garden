import React, { useState } from "react";
import InputMask from "react-input-mask";
import {
  setAutorizationActive,
  setUserName,
  setUserPhone,
  fetchDataAutorizationPOST,
} from "../../../../store/actions";
import { connect } from "react-redux";
import { RootState } from "../../../../store/store";
import { AutorizationDataItemType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface IModal {
  data: AutorizationDataItemType;
  setAutorizationActive: (autorizationActive: string) => void;
  setUserName: (userName: string) => void;
  userPhone: string;
  setUserPhone: (userPhone: string) => void;
  fetchDataAutorizationPOST: (url: string) => void;
}

interface InputStyle {
  invalid: string;
}

interface TextStyle {
  func: boolean;
}

const ModalEl = styled.div`
  padding: 34px;
  margin-bottom: 93px;

  position: relative;

  background: #f3f4f0;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.28);
  border: 2px solid black;
  border-radius: 15px;
`;

const Title = styled.p`
  margin-bottom: 28px;

  color: #383838;
  font-size: 14px;
  font-weight: 600;
`;

const Label = styled.label`
  margin-bottom: 20px;

  display: flex;
  gap: 8px;

  font-size: 14px;
  font-weight: 800;
`;

const Input = styled(InputMask)<InputStyle>`
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.invalid === "true" ? "2px solid red" : "2px solid #383838"};
  outline: none;

  &::placeholder {
    color: #bebebe;
    font-size: 14px;
    font-weight: 800;
  }
`;

const Button = styled.button`
  padding: 12px 30px;

  position: absolute;
  right: 22px;
  bottom: -20px;

  color: #f3f4f0;

  background-color: #51c7a5;
  border: 2px solid #383838;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.28);
  border-radius: 5px;
`;

const Text = styled.div<TextStyle>`
  color: ${(props) => (props.func ? "#51c7a5" : "#383838")};
  font-size: 10px;
  font-weight: 500;

  cursor: ${(props) => (props.func ? "pointer" : "none")};
`;

const Modal: React.FC<IModal> = ({
  data,
  setAutorizationActive,
  setUserName,
  userPhone,
  setUserPhone,
  fetchDataAutorizationPOST,
}) => {
  let [value, setValue] = useState<string>("");
  let [invalid, setInvalid] = useState<string>("false");

  function handleForm(e: React.FormEvent): void {
    e.preventDefault();

    if (data.name === "phone") {
      if (value.length !== 13) {
        setInvalid("true");
      } else {
        setInvalid("false");
        setValue("");
        setUserPhone(`+7 ${value}`);
        setAutorizationActive("code");
      }
    } else if (data.name === "code") {
      if (value.length !== 5) {
        setInvalid("true");
      } else {
        setInvalid("false");
        setValue("");
        setAutorizationActive("name");
      }
    } else {
      if (value.length === 0 || value.length <= 3) {
        setInvalid("true");
      } else {
        setInvalid("false");
        setValue("");
        setUserName(value);
        fetchDataAutorizationPOST("/login");
        localStorage.setItem("name", value);
        localStorage.setItem("phone", userPhone);
      }
    }
  }

  return (
    <ModalEl>
      <Title>{data.title}</Title>
      <form onSubmit={handleForm}>
        <Label>
          {data.form.label}
          <Input
            invalid={invalid}
            mask={data.form.mask}
            maskPlaceholder={null}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            value={value}
            placeholder={data.form.placeholder}
          />
        </Label>
        <Button>{data.form.button}</Button>
      </form>
      <Text func={data.func ? true : false} onClick={data.func && data.func}>
        {data.text}
      </Text>
    </ModalEl>
  );
};

const mapStateToProps = ({ user }: RootState) => {
  return {
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {
  setAutorizationActive,
  setUserName,
  setUserPhone,
  fetchDataAutorizationPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
