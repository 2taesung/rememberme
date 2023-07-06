import styled from 'styled-components';
import usePostionListStore from '../hooks/usePositionListStore';
import { flexMixins } from '../styles/mixins';

const MainLayout = styled.div`
    ${flexMixins.flexCenter}
  `;

export default function MainPage() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;

  return (
    <MainLayout>
      <h1>Main</h1>
    </MainLayout>
  );
}
