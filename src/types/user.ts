export interface UserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  username?: string;
}

export interface BasharDTO {
    name: string;
    email: string;
    phonenumber: string;
  }

  export interface Bashar extends BasharDTO {
    id: number;
  }

export interface User extends UserDTO {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
