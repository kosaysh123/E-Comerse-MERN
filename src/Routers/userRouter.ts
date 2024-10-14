import express from "express";
import { login, register } from "../Services/userServices";

const userRouter = express.Router();

userRouter.post("/register", async (requset, respons) => {
  const { firstName, lastName, email, password } = requset.body;
  const { data, statesCode } = await register({
    firstName,
    lastName,
    email,
    password,
  });
  respons.status(statesCode).send(data);
});

userRouter.post("/login", async (requset, respons) => {
  const { email, password } = requset.body;
  const { data, statesCode } = await login({ email, password });
  respons.status(statesCode).send(data);
});

export default userRouter
