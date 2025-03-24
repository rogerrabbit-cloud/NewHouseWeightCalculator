export type HouseType = 'brick' | 'wood';

export interface HouseDetails {
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  floors: number;
  roomDimensions: { length: number; width: number }[]; // Array of room dimensions
  houseType: HouseType;
  roofWeight: number; // Constant based on regulations
}

export function calculateHouseWeight(details: HouseDetails): number {
  const { bedrooms, bathrooms, livingRooms, floors, roomDimensions, houseType, roofWeight } = details;

  // Calculate the total floor area
  const totalFloorArea = roomDimensions.reduce((total, room) => {
    return total + room.length * room.width;
  }, 0);

  // Base weight per square meter for brick or wood
  const baseWeightPerSqMeter = houseType === 'brick' ? 500 : 300;

  // Calculate the weight of the house
  const houseWeight =
    totalFloorArea * baseWeightPerSqMeter * floors + roofWeight;

  return houseWeight;
}