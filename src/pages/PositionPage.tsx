import usePostionListStore from '../hooks/usePositionListStore';
import MapSection from '../components/MapSection';
import useCurrentPosition from '../hooks/useCurrentPosition';
import { MainHead, MainLayout } from './styled';

export default function PositionPage() {
  const [snapshot, postionListStore] = usePostionListStore();
  const { positions } = snapshot;
  const { currentLat, currentLng } = useCurrentPosition();

  const addItem = () => {
    postionListStore.addItem({
      lat: 33.55635,
      lng: 126.795841,
      title: '1',
      contents: 'contents',
    });
  };

  return (
    <MainLayout>
      <MainHead>
        <h1>PositionPage</h1>
      </MainHead>
      <button type="button" aria-label="Test" onClick={addItem}>
        TEST
      </button>
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
      <MapSection currentLat={currentLat} currentLng={currentLng} />
    </MainLayout>
  );
}
