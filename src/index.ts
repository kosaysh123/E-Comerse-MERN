import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./Routers/userRouter";

const app = express();
const port = 3002;
app.use(express.json())
mongoose
  .connect("mongodb://127.0.0.1:27017/ecomerse")
  .then(() => {
    console.log("conatcting ok");
  })
  .catch(() => {
    console.log("Conacte Erorr");
  });
  app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Server Is Running at : http://localhost/${port}`)
});
