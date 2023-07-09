import { List, ListItem, ListItemText } from '@mui/material';
import { cloneElement } from 'react';
import usePostionListStore from '../hooks/usePositionListStore';

export default function PositionList() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;

  function generate(element: React.ReactElement) {
    return [0].map(
      value =>
        // eslint-disable-next-line implicit-arrow-linebreak
        cloneElement(element, {
          key: value,
        }),
      // eslint-disable-next-line function-paren-newline
    );
  }

  return (
    // <>
    //   <h3>PositionList</h3>
    //   {
    //     positions.map(position => (<p key={position.id}>{position.title}</p>))
    //   }
    // </>
    <List>
      {generate(
        <ListItem>
          <ListItemText
            primary="Single-line item"
            // secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>,
      )}
    </List>
  );
}
