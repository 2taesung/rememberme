import styled from 'styled-components';
import { flexMixins, wh } from '../styles/mixins';
import AllList from '../mainPage/AllList';

const MainLayout = styled.div`
  ${flexMixins.flexColumn}
  ${wh}

  justify-content: flex-start;
`;

const MainHead = styled.div`
  top: 0;    

  margin: 20px;

  font-size: ${({ theme }) => theme.fontSizes.extraHuge};
`;

export default function MainPage() {
  return (
    <MainLayout>
      <MainHead>
        <h1>Remember Me!</h1>
      </MainHead>
      <AllList />
    </MainLayout>
  );
}
