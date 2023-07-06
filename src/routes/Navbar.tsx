import styled from 'styled-components';
import NavigationMenu from './Menus';
import { flexMixins, layooutBox } from '../styles/mixins';

const NavbarLayout = styled.div`
    ${layooutBox}
  ${flexMixins.flexRow}

  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 80px;
  max-width: 800px;

`;

export default function Navbar() {
  return (
    <NavbarLayout>
      <h1>Navbar</h1>
      <NavigationMenu />
    </NavbarLayout>
  );
}
