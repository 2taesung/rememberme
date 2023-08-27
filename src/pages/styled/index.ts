import styled from 'styled-components';
import { flexMixins, wh, maxWidth } from '../../styles/mixins';

export const MainLayout = styled.div`
  ${flexMixins.flexColumn}
  ${wh}

  justify-content: flex-start;
`;

export const MainHead = styled.div`
  top: 0;    

  margin: 20px;

  font-size: ${({ theme }) => theme.fontSizes.extraHuge};
`;

export const MainSection = styled.div`
  ${maxWidth}

  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.normal};
`;

