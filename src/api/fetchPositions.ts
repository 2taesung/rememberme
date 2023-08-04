import { TPosition } from "../types";

export const fetchPositions = async (): Promise<TPosition[]> => {
  try {
    const response = await fetch('/test/positions');
    const data = await response.json();
    return data.positions || [];
  } catch (error) {
    console.error('Failed to fetch positions:', error);
    return [];
  }
}
