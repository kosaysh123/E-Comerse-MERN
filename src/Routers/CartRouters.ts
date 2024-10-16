import express from "express";
import { getActiveCartForUser } from "../Services/CartServices";
import ValidateJWT from "../Middleware/ValidateJWT";
import { Request , Response } from "express";
interface ExReq extends Request {
    user?: any;

  }
const router = express.Router();
router.get("/", ValidateJWT, async (req: ExReq, res: Response) => {
  const userId = req.user._id;
  const cart = getActiveCartForUser({ userId });
  res.status(200).send(cart);
});

export default router;
