import Lottie from 'react-lottie';
import animationData from '../lotties/kiss-of-the-heart.json';

export default function Navbar() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div>Navbar</div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
}
