export interface UserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  username?: string;
}

export interface User extends UserDTO {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
