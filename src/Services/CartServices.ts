import CartMoudel from "../models/CartMoudel";

interface CreateCartForUser {
  userId: string;
}
const CreateCartForUser = async ({ userId }: CreateCartForUser) => {
  const card = await CartMoudel.create({ userId , totalAmounte: 0 , status: "active" });
  await card.save();
  return card;
};


interface getActiveCartForUser {
  userId: string;
}
export const getActiveCartForUser = async ({
  userId,
}: getActiveCartForUser) => {
  let cart = await CartMoudel.findOne({ userId, status: "active" });
  if (!cart) {
    cart = await CreateCartForUser({userId})
  }
  return cart;
};
