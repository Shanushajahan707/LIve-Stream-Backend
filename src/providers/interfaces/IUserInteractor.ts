import { User, googleUser } from "../../entities/User";

export interface IUserInteractor {
  login(email: string): Promise<User | null>;
  signup(
    username: string,
    email: string,
    password: string,
    dateofbirth: Date,
    isblocked: boolean
  ): Promise<User>;
  checkpass(email: string, password: string): Promise<boolean | undefined>;
  jwt(payload: User): Promise<string>;
  refreshToken(payload: User): Promise<string>;
  verifyRefreshToken(token:string): Promise<boolean>;
  generatenewtoken(token:string): Promise<string|null>;
  sendmail(email: string): Promise<string>;
  checkotp(value: number): Promise<{ isValidOTP: boolean; isExpired: boolean }>;
  isAdmin(email: string): Promise<{ isAdmin: boolean }>;
  googleUserToken(
    googleId: number,
    username: string,
    email: string,
    role:string,
    _id:string
  ): Promise<string>;
  googleFindById(id: string): Promise<googleUser | null>;
  googleFindOne(id: string): Promise<googleUser | null>;
  googleUserCreation(data: googleUser): Promise<googleUser>;
  forgotPassMailSent(email:string):Promise<{isMailSent:string,otp:number}>
  isUserBlocked(userid:string):Promise<boolean>
}
