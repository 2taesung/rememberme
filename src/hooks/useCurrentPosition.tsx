import { useEffect, useState } from 'react';
import { CurrentPosition } from '../types/CurrentPosition';

export default function useCurrentPosition(): CurrentPosition {
  const [currentPosition, setCurrentPosition] = useState({
    currentLat: 0,
    currentLng: 0,
  });

  useEffect(() => {
    navigator.geolocation?.watchPosition(position => {
      const currentLat: number = position.coords.latitude; // 위도
      const currentLng: number = position.coords.longitude; // 경도

      setCurrentPosition({ currentLat, currentLng });
    });
  }, []);
  return currentPosition;
}
