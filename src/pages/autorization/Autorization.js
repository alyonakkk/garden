import Header from "./components/header/Header";
import style from "./autorization.module.css";
import Modal from "./components/modal/Modal";
import Logo from "./components/logo/Logo";
import { connect } from "react-redux";
import {
  fetchDataAutorizationPOST,
  setAutorizationActive,
  setUserName,
} from "../../store/actions";

function Autorization({
  autorizationActive,
  setAutorizationActive,
  userName,
  userPhone,
  setUserName,
  fetchDataAutorizationPOST,
}) {
  function handleCode() {
    setAutorizationActive("phone");
  }

  function handleName() {
    fetchDataAutorizationPOST("/login");
    localStorage.setItem("name", userName);
    localStorage.setItem("phone", userPhone);
  }

  const autorizationData = {
    phone: {
      name: "phone",
      title: "Введите номер телефона, мы отправим вам СМС с кодом",
      text: "Нажимая далее Вы соглашаетесь с правилами Пользовательского соглашения",
      form: {
        mask: "999-999-99-99",
        lable: "+7",
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

  const data = autorizationData[autorizationActive];

  return (
    <div className={style.bc}>
      <div className={style.container}>
        <Header />
        <Modal data={data} />
        <Logo />
      </div>
    </div>
  );
}

const mapStateToProps = ({ autorization, user }) => {
  return {
    autorizationActive: autorization.autorizationActive,
    userName: user.name,
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {
  setAutorizationActive,
  setUserName,
  fetchDataAutorizationPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Autorization);
