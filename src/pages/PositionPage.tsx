import { MainHead, MainLayout, MainSection } from './styled';
import PositionSection from '../positionPage/PositionSection';

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
