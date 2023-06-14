import { Reset } from 'styled-reset';
// import { useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  // useEffect(() => {
  //   (async function mswCheckFetch() {
  //     const response = await fetch('/products/1').then(res => res.json());
  //     console.log(
  //       '🚀 ~ file: App.tsx:19 ~ mswCheckFetch ~ response:',
  //       response,
  //     );
  //   })();
  // }, []);
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then(registration => console.log('scope is: ', registration.scope));
  //   }
  // }, []);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <p>Hello</p>
    </>
  );
}
