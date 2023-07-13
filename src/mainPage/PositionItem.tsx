import { StarBorder } from '@mui/icons-material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function PositionItem({ title }: { title: string }) {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}
