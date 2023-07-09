import { css } from 'styled-components';

export const layooutBox = css`
  border: 1px solid black;
`;

export const wh = css`
  width: 100vw;
  height: 100vh;
`;

export const flexMixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexRow: css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    text-align: center; 
  `,

  flexColumn: css`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    text-align: center;
  `,

  flexBoxCenter: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  `,
};
