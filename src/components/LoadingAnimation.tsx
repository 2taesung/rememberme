import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const LoadingCenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export default function LoadingAnimation() {
  return (
    <LoadingCenterWrapper>
      <Player
        autoplay
        hover
        src={
          'https://lottie.host/cc769fa4-61c5-49d7-a9bf-eba17010407e/IQeZROUGs0.json'
        }
      />
    </LoadingCenterWrapper>
  );
}
