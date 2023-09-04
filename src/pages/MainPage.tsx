import AllList from '@src/mainPage/AllList';
import { MainHead, MainLayout } from './styled';

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
