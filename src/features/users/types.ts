export interface ICompany{
  name: string
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: ICompany;
}
