declare module 'redux-persist/lib/*';
export interface Country {
  cca2: string;
  region: string;
  subregion: string;
  name: string;
  currency: string[];
  callingCode: string[];
  flag: string;
}

export interface User {
  id?: string;
  name: string;
  lastName: string;
  country?: Country;
  profilePicture?: string;
  birthdate: Date;
}

export interface BaseAction {
  type: string;
  payload: any;
}
