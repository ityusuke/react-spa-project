import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const TOP = () => {
  const { setUserInfo } = useContext(UserContext);

  const history = useHistory();
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/user");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/user");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
