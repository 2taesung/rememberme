import { Reset } from 'styled-reset';
// import { useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './components/MainPage';
import usePostionListStore from './hooks/usePositionListStore';

export default function App() {
  const [snapshot] = usePostionListStore();
  const { positions } = snapshot;
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
      {positions.map(position => (
        <p key={position.id}>{position.title}</p>
      ))}
      <p>Hello</p>
      <MainPage />
    </>
  );
}
