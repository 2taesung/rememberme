import styled from 'styled-components';
import Nav from './Nav';
import { flexMixins } from '@src/styles/mixins';

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
