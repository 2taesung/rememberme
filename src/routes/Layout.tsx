import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { flexMixins, layooutBox } from '../styles/mixins';

const StyledLayout = styled.div`
    ${layooutBox}
  ${flexMixins.flexColumn}

  width: 100vw;
`;

export default function Layout() {
  return (
    <StyledLayout>
      <Outlet />
      <Navbar />
    </StyledLayout>
  );
}
