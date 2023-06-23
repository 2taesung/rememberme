import usePostionListStore from '../hooks/usePositionListStore';
import MapSection from './MapSection';

export default function PositionPage() {
  const [snapshot, postionListStore] = usePostionListStore();
  const { positions } = snapshot;

  const addItem = () => {
    postionListStore.addItem({
      lat: 33.55635,
      lng: 126.795841,
      title: '1',
      contents: 'contents',
    });
  };

  return (
    <div>
      <h1>PositionPage</h1>
      <button type="button" aria-label="Test" onClick={addItem}>
        TEST
      </button>
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
      <MapSection />
    </div>
  );
}
