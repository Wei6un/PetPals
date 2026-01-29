
export enum UserRole {
  OWNER = 'OWNER',
  RENTER = 'RENTER'
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  dietaryNotes: string;
  location: string;
  imageUrl: string;
  ownerName: string;
}

export interface Renter {
  id: string;
  name: string;
  gender: '男' | '女' | '其他';
  age: number;
  isVerified: boolean;
  bio: string;
  imageUrl: string;
  rating: number;
}

export type ViewState = 'HOME' | 'PETS_LIST' | 'WALKERS_LIST' | 'REGISTER_PET' | 'REGISTER_RENTER';
