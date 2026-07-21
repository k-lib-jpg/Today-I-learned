//moleculerとは検索バーといった検索欄と検索ボタンで構成されるような最小単位で構成された部位のことを指す
import styled from 'styled-components';
//以下のインポートされたものはatom
import PrimaryButton from '../atoms/button/PrimaryButton';
import Input from '../atoms/input/Input';

const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

export default SearchInput;
