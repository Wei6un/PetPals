
import { Pet, Renter } from './types.ts';

export const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: '麻糬',
    breed: '柴犬',
    age: 3,
    dietaryNotes: '對雞肉過敏，只能吃羊肉乾',
    location: '台北市大安區',
    imageUrl: 'https://picsum.photos/seed/shiba/400/300',
    ownerName: '陳小姐'
  },
  {
    id: '2',
    name: '拿鐵',
    breed: '黃金獵犬',
    age: 5,
    dietaryNotes: '胃口很好，什麼都吃',
    location: '新北市板橋區',
    imageUrl: 'https://picsum.photos/seed/golden/400/300',
    ownerName: '張先生'
  }
];

export const MOCK_RENTERS: Renter[] = [
  {
    id: '1',
    name: '王小明',
    gender: '男',
    age: 24,
    isVerified: true,
    bio: '我是大學生，非常喜歡和毛孩互動。',
    imageUrl: 'https://picsum.photos/seed/man1/150/150',
    rating: 4.8
  }
];
