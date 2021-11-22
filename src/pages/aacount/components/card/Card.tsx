import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store/store";
import styled from "styled-components";
import ava from "../../img/ava.png";

interface ICard {
  userName: string;
  userPhone: string;
}

const UserCard = styled.div`
  padding: 20px;
  margin-bottom: 32px;

  background: #f3f4f0;
  border-radius: 15px;
`;

const Avatar = styled.div`
  margin-bottom: 15px;

  width: 48px;
  height: 48px;

  background-image: url(${ava});
`;

const Name = styled.p`
  margin-bottom: 11px;

  font-weight: 800;
`;

const Phone = styled.p`
  color: #ffb92a;
  font-size: 13px;
  font-weight: 600;
`;

const Card: React.FC<ICard> = ({ userName, userPhone }) => {
  return (
    <UserCard>
      <Avatar></Avatar>
      <Name>{userName}</Name>
      <Phone>{userPhone}</Phone>
    </UserCard>
  );
};

const mapStateToProps = ({ user }: RootState) => {
  return {
    userName: user.name,
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
