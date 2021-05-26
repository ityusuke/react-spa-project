import styled from "styled-components";
import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { name, img } = props;

  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <Scontainer>
      <SImg width={200} src={img} alt={name} />
      <Sname>{name}</Sname>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  text-align: center;
  border-radius: 50%;
`;
const Sname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
