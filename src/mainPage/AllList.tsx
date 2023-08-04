import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Radar } from '@mui/icons-material';
import PositionList from './PositionList';

export default function AllList() {
  const [positionListOpen, setPositionListOpen] = useState(true);

  const positionHandleClick = () => {
    setPositionListOpen(!positionListOpen);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItemButton onClick={positionHandleClick}>
        <ListItemIcon>
          <Radar />
        </ListItemIcon>
        <ListItemText primary="Position" />
        {positionListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={positionListOpen} timeout="auto" unmountOnExit>
        <PositionList />
      </Collapse>
    </List>
  );
}
