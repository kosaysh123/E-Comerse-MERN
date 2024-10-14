import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";


interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterDto) => {
  const findUser = await UserModel.findOne({ email });
  if (findUser) {
    return { data: "User already Register", statesCode: 400 };
  }
  const newUser = new UserModel({ firstName, lastName, email, password  });
  await newUser.save();
  return {
    data: generateToken({ email, password, firstName, lastName }),
    statesCode: 200,
  };
};

interface LoginDto {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginDto) => {
  const findUser = await UserModel.findOne({ email });
  if (!findUser) {
    return { data: "Incrount Password Or Email", statesCode: 400 };
  }
  const passwordMatch = password === findUser.password;
  if (passwordMatch) {
    return {
      data: generateToken({
        email,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        password
      }),
      statesCode: 200,
    };
  } else {
    return { data: "Incrount Password Or Email", statesCode: 400 };
  }
};

const generateToken = (data: any) => {
  return jwt.sign(
    data,
    "p7BZvZ+;?xf2%:wBjI-9+18/6bY=M8it+1ox_~RLxc?hW)/^M~+!o?`L?>mn&LC"
  );
};
