import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  imge: string;
  prise: number;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  imge: { type: String, required: true },
  prise: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
});

const ProudectModel = mongoose.model<IProduct>("Product" , productSchema)

export default ProudectModel