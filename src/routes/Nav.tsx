import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Radar } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import MENUS from '../data/menus';

const ICONS: Map<string, () => React.ReactElement> = new Map([
  ['position', () => <Radar />],
  ['time', () => <AccessTimeIcon />],
  ['tree', () => <AccountTreeIcon />],
  ['home', () => <HomeIcon />],
]);

export default function Nav() {
  const [value, setValue] = useState('recents');
  const navigate = useNavigate();

  const handleNavigation = (menu: string) => {
    navigate(`${menu}`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      {MENUS.map((menu: string) => {
        const IconComponent = ICONS.get(menu);
        if (!IconComponent) {
          return null; // or return a default element
        }
        return (
          <BottomNavigationAction
            key={menu}
            label={menu}
            value={menu}
            icon={<IconComponent />}
            onClick={() => handleNavigation(menu)}
          />
        );
      })}
    </BottomNavigation>
  );
}
