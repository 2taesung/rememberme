import { Reset } from 'styled-reset';
import MapSection from './components/MapSection';
import GlobalStyle from './styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';
// import dotenv from 'dotenv';

// dotenv.config();
export default function App() {
  const navigate = useNavigate();

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
