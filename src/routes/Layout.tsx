import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { flexMixins } from '../styles/mixins';

const StyledLayout = styled.div`
  ${flexMixins.flexCenter}
  
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
