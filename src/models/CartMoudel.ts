import mongoose, { Schema, Document ,ObjectId } from "mongoose";
import { IProduct } from "./ProudectModel";

const statusEnum = ["active" , "completed"]

export interface ICartItem extends Document {
  product: IProduct;
  unitPrise: number;
  quantity: number;
}

export interface ICart extends Document {
  userId:ObjectId | string;
  item: ICartItem[];
  totalAmounte: number;
  status: "active" | "completed";
}

export const cardItemSchema = new Schema<ICartItem>({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  unitPrise: { type: Number, required: true },
});

const CardSchema = new Schema<ICart>({
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  item: [cardItemSchema],
  totalAmounte: { type: Number, required: true },
  status: { type: String, enum:statusEnum },
});

const CartMoudel = mongoose.model("cart" ,CardSchema )
export default CartMoudel
