import { flexMixins, maxWidth, wh } from '@src/styles/mixins';
import styled from 'styled-components';

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

