import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel";

interface ExtendRequest extends Request {
  user?: any;
}
const ValidateJWT = (req: ExtendRequest, res: Response, next: NextFunction) => {
  const AuthorizationHeader = req.get("authorization");

  if (!AuthorizationHeader) {
    res.status(403).send("Not authorization In Header");
    return;
  }
  const Token = AuthorizationHeader.split(" ")[1];

  if (!Token) {
    res.status(403).send("Invalid Token ");
    return;
  }
  jwt.verify(
    Token,
    "p7BZvZ+;?xf2%:wBjI-9+18/6bY=M8it+1ox_~RLxc?hW)/^M~+!o?`L?>mn&LC",
    async (err, payload) => {
      if (err) {
        res.status(403).send("Invalid Token ");
        return;
      }
      if (!payload) {
        res.status(403).send("Invalid payload in User ");
        return;
      }
      const userPayload = payload as {
        email: string;
        firstName: string;
        lastName: string;
      };
      const user = await UserModel.findOne({ email: userPayload.email });
      req.user = user;
      next()
    }
  );
};

export default ValidateJWT;
