import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { CurrentPosition } from '../types/CurrentPosition';

export default function MapSection({
  currentLat,
  currentLng,
}: CurrentPosition) {
  return (
    <Map
      center={{ lat: currentLat, lng: currentLng }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: currentLat, lng: currentLng }}>
        <div style={{ color: '#000' }}>Now</div>
      </MapMarker>
    </Map>
  );
}
