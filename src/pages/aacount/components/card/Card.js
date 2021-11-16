import { connect } from "react-redux";
import style from "../../account.module.css";

function Card({ userName, userPhone }) {
  return (
    <div className={style.user_card}>
      <div className={style.avatar}></div>
      <p className={style.name}>{userName}</p>
      <p className={style.phone}>{userPhone}</p>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    userName: user.name,
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
