import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { TCurrentPosition } from '../types';

export default function MapSection({
  currentLat,
  currentLng,
}: TCurrentPosition) {
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
