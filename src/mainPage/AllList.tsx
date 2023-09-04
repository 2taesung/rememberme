import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Radar, AccessTime } from '@mui/icons-material';
import PositionList from './PositionList';

export default function AllList() {
  const [positionListOpen, setPositionListOpen] = useState(true);
  const [timeListOpen, setTimeListOpen] = useState(true);

  const positionHandleClick = () => {
    setPositionListOpen(!positionListOpen);
  };
  const timeHandleClick = () => {
    setTimeListOpen(!timeListOpen);
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
      <ListItemButton onClick={timeHandleClick}>
        <ListItemIcon>
          <AccessTime />
        </ListItemIcon>
        <ListItemText primary="Time" />
        {timeListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={timeListOpen} timeout="auto" unmountOnExit>
        <PositionList />
      </Collapse>
    </List>
  );
}
