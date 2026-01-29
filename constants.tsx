
import { Pet, Renter } from './types';

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
    dietaryNotes: '胃口很好，什麼都吃，但不可以吃巧克力',
    location: '新北市板橋區',
    imageUrl: 'https://picsum.photos/seed/golden/400/300',
    ownerName: '張先生'
  },
  {
    id: '3',
    name: '波比',
    breed: '邊境牧羊犬',
    age: 2,
    dietaryNotes: '每天需要補充兩次魚油',
    location: '台中市西屯區',
    imageUrl: 'https://picsum.photos/seed/border/400/300',
    ownerName: '林先生'
  },
  {
    id: '4',
    name: '巧可',
    breed: '貴賓狗',
    age: 1,
    dietaryNotes: '少量多餐，不吃硬乾糧',
    location: '高雄市左營區',
    imageUrl: 'https://picsum.photos/seed/poodle/400/300',
    ownerName: '王小姐'
  }
];

export const MOCK_RENTERS: Renter[] = [
  {
    id: '1',
    name: '王小明',
    gender: '男',
    age: 24,
    isVerified: true,
    bio: '我是大學生，家裡養過三隻狗，非常喜歡和毛孩互動。',
    imageUrl: 'https://picsum.photos/seed/man1/150/150',
    rating: 4.8
  },
  {
    id: '2',
    name: '李詩涵',
    gender: '女',
    age: 28,
    isVerified: true,
    bio: '上班族，假日想找個可愛的伴一起去草地跑步。',
    imageUrl: 'https://picsum.photos/seed/woman1/150/150',
    rating: 5.0
  },
  {
    id: '3',
    name: '陳志遠',
    gender: '男',
    age: 35,
    isVerified: false,
    bio: '平常有在健身，可以應付體力充沛的大型犬。',
    imageUrl: 'https://picsum.photos/seed/man2/150/150',
    rating: 4.5
  }
];
