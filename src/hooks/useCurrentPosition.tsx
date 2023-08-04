import { useEffect, useState } from 'react';
import { TCurrentPosition } from '../types';

export default function useCurrentPosition(): TCurrentPosition {
  const [currentPosition, setCurrentPosition] = useState({
    currentLat: 0,
    currentLng: 0,
  });

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(position => {
      const currentLat: number = position.coords.latitude; // 위도
      const currentLng: number = position.coords.longitude; // 경도

      setCurrentPosition({ currentLat, currentLng });
    });
  }, []);
  return currentPosition;
}
