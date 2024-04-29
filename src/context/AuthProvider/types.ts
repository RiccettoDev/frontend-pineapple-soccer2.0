export interface IUser {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  stars?: string;
  position?: string;
  force?: string;
  attack?: string;
  defense?: string;
  goals?: string;
  assistance?: string;
  status?: string;
  img?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}