export interface ICreateContact {
  name: string;
  phone: string;
  bio: string;
  photoUrl?: string;
}
export interface IContact extends ICreateContact {
  _id: string;
}
