import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexMixins, layooutBox } from '../styles/mixins';

const MENUS: string[] = ['position', 'time', 'tree'];

const ListLayout = styled.div`
  ${layooutBox}
  ${flexMixins.flexRow}
`;

const Menu = styled.div`
  ${layooutBox}
  ${flexMixins.flexCenter}
`;

export default function Menus() {
  return (
    <ListLayout>
      {MENUS.map(menu => (
        <Menu key={menu}>
          <Link to={menu}>{menu}</Link>
        </Menu>
      ))}
    </ListLayout>
  );
}
