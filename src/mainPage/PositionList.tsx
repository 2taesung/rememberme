import usePostionListStore from '../hooks/usePositionListStore';

export default function PositionList() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;

  return (
    <>
      <h3>PositionList</h3>
      {
        positions.map(position => (<p key={position.id}>{position.title}</p>))
      }
    </>
  );
}
