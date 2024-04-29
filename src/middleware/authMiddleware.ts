import { Request,Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()


const authMiddleware= (req : Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers['authorization'];
  console.log('auth header',authHeader);
  if (authHeader) {
   const token = authHeader && authHeader.split(' ')[1];
    console.log('token is',token);
    jwt.verify(token,process.env.SECRET_LOGIN as string , (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      console.log('user from the auth middleware');
      next();
    });
 } else {
    res.sendStatus(401);
 }
};

export default authMiddleware
