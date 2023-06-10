import { Player } from '@lottiefiles/react-lottie-player';

const lottieSRCs = [
  'https://assets10.lottiefiles.com/packages/lf20_etaum4bz.json',
  'https://assets4.lottiefiles.com/private_files/lf30_D4yZiV.json',
];

export default function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '550px',
      }}
    >
      {lottieSRCs.map(src => (
        <Player key={src} autoplay hover src={src} />
      ))}
    </div>
  );
}
