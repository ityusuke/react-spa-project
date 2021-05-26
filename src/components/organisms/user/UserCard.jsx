import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";
export const UserCard = memo((props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName img={user.img} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.society}</dd>
        <dt>WEB</dt>
        <dd>{user.web}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  overflow-wrap: break-word;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
