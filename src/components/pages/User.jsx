import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
const users = [...Array(10).keys()].map((index) => {
  return {
    id: index,
    name: `ゆうすけ-${index}`,
    img: "https://source.unsplash.com/2ghjvFAFlwk",
    mail: "example.com",
    tel: "000-0000-0000",
    society: "日の丸株式会社",
    web: "www.test.com"
  };
});

export const User = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUSerArea>
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </SUSerArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUSerArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
