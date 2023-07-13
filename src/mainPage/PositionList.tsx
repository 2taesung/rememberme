import usePostionListStore from '../hooks/usePositionListStore';
import PositionItem from './PositionItem';
import List from '@mui/material/List';

export default function PositionList() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;

  return (
    <List component="div" disablePadding>
      {positions.map(({ id, title }) => {
        return <PositionItem key={id} title={title} />;
      })}
    </List>
  );
}
