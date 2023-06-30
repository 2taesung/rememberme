import usePostionListStore from '../hooks/usePositionListStore';

export default function MainPage() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;

  return (
    <>
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
    </>
  );
}
