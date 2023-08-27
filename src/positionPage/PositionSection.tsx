import useCurrentPosition from '../hooks/useCurrentPosition';
import usePostionListStore from '../hooks/usePositionListStore';
import MapSection from './MapSection';

export default function PositionSection() {
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
    <>
      <button type="button" aria-label="Test" onClick={addItem}>
        Add
      </button>
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
      <MapSection currentLat={currentLat} currentLng={currentLng} />
    </>
  );
}
