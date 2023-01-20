import React from "react";
import checkValue from "./checkValue";
import Product from "./Product";

const cardArr = [
  {
    firm: "Сказочное заморское яство",
    title: "Нямушка",
    titleDescription: "с фуа-гра",

    portions: 10,
    freeMouse: 1,
    weigth: 0.5,
    stock: 5,
    compositon: "Печень утки разварная с артишоками",
    sad: "Печалька, с фуа-гра закончился."
  },
  {
    firm: "Сказочное заморское яство",
    title: "Нямушка",
    titleDescription: "с рыбой",
    portions: 20,
    freeMouse: 2,
    weigth: 2,
    stock: 0,
    compositon: "Головы щучьи с чесноком да свежайшая сёмгушка",
    sad: "Печалька, с рыбой закончился"
  },
  {
    firm: "Сказочное заморское яство",
    title: "Нямушка",
    titleDescription: "с курой",
    portions: 100,
    freeMouse: 5,
    weigth: 5,
    stock: 0,
    compositon: "Филе из циплят с трюфелями в бульоне",
    sad: "Печалька, с курой закончился"
  },
];

const card = cardArr.map((el, index) => {
  const currentMouses = checkValue(
    el.freeMouse,
    "мышь в подарок",
    " мыши в подарок",
    " мышей в подарок"
  );

  const currentPortion = checkValue(
    el.portions,
    "порция",
    " порции",
    " порций"
  );

  return (
    <Product
      key={index}
      firm={el.firm}
      title={el.title}
      title_description={el.titleDescription}
      portions={currentPortion}
      freeMouse={currentMouses}
      weigth={el.weigth}
      composition={el.compositon}
      stock={el.stock}
      storage={cardArr.length}
      sad={el.sad}
    />
  );
});

const ProductsBlock = () => {
  return <div className="products">{card}</div>;
};

export default ProductsBlock;
