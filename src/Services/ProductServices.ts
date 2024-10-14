import ProudectModel, { IProduct } from "../models/ProudectModel";

export const ProductDataAll = async () => {
  return await ProudectModel.find();
};

export const SeedInitialProducts = async () => {
  const Producted = [
    {
      title: "Personal Care Products",
      imge: "https://i.ytimg.com/vi/OdiWubm8ODk/sddefault.jpg",
      prise: 1500,
      stock: 20,
    },
    {
      title: "Personal Shose Products",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&s",
      prise: 499,
      stock: 32,
    },
    {
      title: "Utilizing Contextual Backdrops",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinZMLrxpkOWiV-lzJPBxaqWrSfcnDgDdjLw&s",
      prise: 300,
      stock: 70,
    },
    {
      title: "Playing with Lighting Techniques",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkD9oIsQv-yQCoZ_jGQy86W_Xc99R1JF5W47PMxP5Hz1fmS7g7qbF687RYH1-EpC-Ju64&usqp=CAU",
      prise: 66,
      stock: 60,
    },
    {
      title: "Innovative Angles and Perspectives",
      imge: "https://i0.wp.com/yqq.qoy.mybluehost.me/wp-content/uploads/2023/09/Product-Photography-1.jpeg?resize=1024%2C683&ssl=1",
      prise: 380,
      stock: 8,
    },
  ];
  const AllProducts = await ProductDataAll();
  if (AllProducts.length === 0) {
    await ProudectModel.insertMany(Producted);
  }
};
