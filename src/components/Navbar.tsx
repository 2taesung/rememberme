import { Player } from '@lottiefiles/react-lottie-player';

export default function Navbar() {

  return (
    <>
      <div>Navbar</div>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ height: '300px', width: '300px' }}
      />
    </>
  );
}
