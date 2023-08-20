import styled from 'styled-components';
import { flexMixins, layooutBox } from '../styles/mixins';
import Nav from './Nav';

const NavbarLayout = styled.div`
  ${flexMixins.flexRow}

  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 80px;
  max-width: 800px;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
`;

export default function Navbar() {
  return (
    <NavbarLayout>
      <Nav />
    </NavbarLayout>
  );
}
