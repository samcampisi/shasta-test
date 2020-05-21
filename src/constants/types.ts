import { Country } from 'react-native-country-picker-modal';

export interface User {
  name: string;
  lastName: string;
  country?: Country;
  profilePicture?: string;
  birthdate: Date;
}
