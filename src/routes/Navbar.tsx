import styled from 'styled-components';
import { flexMixins, layooutBox } from '../styles/mixins';
import Nav from './Nav';

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
      <Nav />
    </NavbarLayout>
  );
}
