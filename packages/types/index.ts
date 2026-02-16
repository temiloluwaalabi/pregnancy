export interface User {
  id: string;
  email: string;
  fullName: string;
  dueDate: string;
  themePreference: 'light' | 'dark' | 'system';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
}
