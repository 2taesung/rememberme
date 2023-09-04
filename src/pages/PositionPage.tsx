import PositionSection from '@src/positionPage/PositionSection';
import { MainHead, MainLayout, MainSection } from './styled';

export default function PositionPage() {
  return (
    <MainLayout>
      <MainHead>
        <h1>PositionPage</h1>
      </MainHead>
      <MainSection>
        <PositionSection />
      </MainSection>
    </MainLayout>
  );
}
