export type AuthRegister = {
  username: string;
  email: string;
  password: string;
};

export type AuthLogin = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
};

export type PlantForm = {
  name: string;
  species: string;
  imageUrl: string;
};

export type Plant = PlantForm & {
  _id: string;
  userId: string;
  positionX: number;
  positionY: number;
  status: 'garden' | 'vault';
};
