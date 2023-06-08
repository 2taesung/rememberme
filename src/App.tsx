import React from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  // useEffect(() => {
  //   (async function mswCheckFetch() {
  //     const response = await fetch('/products/1').then((res) => res.json());
  //     console.log(
  //       '🚀 ~ file: App.tsx:19 ~ mswCheckFetch ~ response:',
  //       response,
  //     );
  //   }());
  // }, []);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <p>Hello</p>
    </>
  );
}
