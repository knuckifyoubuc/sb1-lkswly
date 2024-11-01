export interface Category {
  id: string;
  name: string;
}

export interface GameRound {
  letter: string;
  categories: Category[];
  answers: { [key: string]: string };
  score: number;
}

export const CATEGORIES: Category[] = [
  { id: 'person', name: 'Person' },
  { id: 'place', name: 'Place' },
  { id: 'thing', name: 'Thing' }
];

export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');