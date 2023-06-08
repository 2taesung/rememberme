import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

// "https://assets4.lottiefiles.com/private_files/lf30_n0pwvxe4.json"
const lottieSRCs = ["https://assets10.lottiefiles.com/packages/lf20_etaum4bz.json","https://assets4.lottiefiles.com/private_files/lf30_D4yZiV.json", ]

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '550px',
          cursor: 'pointer'
        }}
      >
        {
          lottieSRCs.map((src) => {
            return (
              <div
                onClick={() => {
                  navigate('/map');
                }}
              >
                <Player
                  autoplay
                  hover
                  src={src}
                  style={{ height: '300px', width: '300px' }}
                />
              </div>
            )
          })
        }
      </div>
    </>
  );
}
