import './app.css';
import { BrowserRouter } from 'react-router-dom';
import PrimaryButton from './components/atoms/button/PrimaryButton';
import SecondaryButton from './components/atoms/button/SecondaryButton';
import SearchInput from './components/molecules/SearchInput';
import UserCard from './components/organisms/user/UserCard';
import DefaultLayout from './components/templates/DefaultLayout';

const user = {
  name: 'jj',
  image:
    'https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: '1111@aaa.co',
  phone: '000-1111-2222',
  company: {
    name: 'yoake',
  },
  website: 'https://google.com',
};

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
