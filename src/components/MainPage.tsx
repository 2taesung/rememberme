import usePostionListStore from '../hooks/usePositionListStore';

export default function MainPage() {
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
    <>
      <button type="button" aria-label="Test" onClick={addItem}>
        TEST
      </button>
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
    </>
  );
}
