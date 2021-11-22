import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Logo from "./components/logo/Logo";
import { connect } from "react-redux";
import {
  fetchDataAutorizationPOST,
  setAutorizationActive,
} from "../../store/actions";
import React from "react";
import { RootState } from "../../store/store";
import {
  AutorizationDataItemType,
  AutorizationDataType,
} from "../../helpers/getTypes";
import styled from "styled-components";

interface IAutorization {
  autorizationActive: string;
  setAutorizationActive: (autorizationActive: string) => void;
  userName: string;
  userPhone: string;
  fetchDataAutorizationPOST: (url: string) => void;
}

const BC = styled.div`
  height: 100vh;

  background-color: #a36ebe;
`;

const Container = styled.div`
  padding: 20px;
`;

const Autorization: React.FC<IAutorization> = ({
  autorizationActive,
  setAutorizationActive,
  userName,
  userPhone,
  fetchDataAutorizationPOST,
}) => {
  function handleCode(): void {
    setAutorizationActive("phone");
  }

  function handleName(): void {
    fetchDataAutorizationPOST("/login");
    localStorage.setItem("name", userName);
    localStorage.setItem("phone", userPhone);
  }

  const autorizationData: AutorizationDataType = {
    phone: {
      name: "phone",
      title: "Введите номер телефона, мы отправим вам СМС с кодом",
      text: "Нажимая далее Вы соглашаетесь с правилами Пользовательского соглашения",
      form: {
        mask: "999-999-99-99",
        label: "+7",
        placeholder: "Номер телефона",
        button: "Далее",
      },
    },
    code: {
      name: "code",
      title: "СМС с кодом было отправлено на номер",
      text: "Ввели неверный номер?",
      func: handleCode,
      form: {
        mask: "99999",
        label: "",
        placeholder: "Код из СМС",
        span: "Повторно Через 12 секунд",
        button: "Go",
      },
    },
    name: {
      name: "name",
      title: "Познакомимся поближе, как мы можем к вам обращаться?",
      text: "Остаться инкогнито",
      func: handleName,
      form: {
        mask: "aaaaaaaaaaaaaaaaaaaa",
        label: "",
        placeholder: "Имя",
        button: "Go",
      },
    },
  };

  function getData(): AutorizationDataItemType {
    if (autorizationActive === "phone") return autorizationData.phone;
    else if (autorizationActive === "code") return autorizationData.code;
    else return autorizationData.name;
  }

  const data: AutorizationDataItemType = getData();

  return (
    <BC>
      <Container>
        <Header />
        <Modal data={data} />
        <Logo />
      </Container>
    </BC>
  );
};

const mapStateToProps = ({ autorization, user }: RootState) => {
  return {
    autorizationActive: autorization.autorizationActive,
    userName: user.name,
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {
  setAutorizationActive,
  fetchDataAutorizationPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Autorization);
