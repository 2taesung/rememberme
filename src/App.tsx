import { Reset } from 'styled-reset';
import MapSection from './components/MapSection';
import GlobalStyle from './styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import dotenv from 'dotenv';

// dotenv.config();
export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    (async function mswCheckFetch() {
      const response = await fetch('/products/1').then(res => res.json());
      console.log(
        '🚀 ~ file: App.tsx:19 ~ mswCheckFetch ~ response:',
        response,
      );
    })();
  }, []);

  const goMap = () => {
    navigate('/map');
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <p>Hello</p>
      <button onClick={goMap}>map</button>
    </>
  );
}
