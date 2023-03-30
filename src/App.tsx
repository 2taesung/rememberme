import { Reset } from 'styled-reset';
import MapSection from './components/MapSection';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <p>Hello</p>
      <MapSection />
    </>
  );
}
