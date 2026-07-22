//pagesとは名前のとおりページを指しており、atom-templateまで盛り込んでUIを作成される
import styled from 'styled-components';
import SearchInput from '../molecules/SearchInput';
import UserCard from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `jj-${val}`,
    image:
      'https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: '1111@aaa.co',
    phone: '000-1111-2222',
    company: {
      name: 'yoake',
    },
    website: 'https://google.com',
  };
});

const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export default Users;
