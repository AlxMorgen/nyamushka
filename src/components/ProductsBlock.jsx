import React from "react";
import checkValue from "./checkValue";
import Product from "./Product";
import Data from "./Data";

const card = Data().map((card, index) => {
  const {
    product,
    firm,
    title,
    weigth,
    description,
    stock,
    portions,
    freeMouse,
  } = card;
  const currentMouses = checkValue(
    freeMouse,
    "мышь в подарок",
    " мыши в подарок",
    " мышей в подарок"
  );

  const currentPortion = checkValue(portions, "порция", " порции", " порций");

  return (
    <Product
      key={product}
      firm={firm}
      title={title}
      product={product}
      portions={currentPortion}
      freeMouse={currentMouses}
      weigth={weigth}
      description={description}
      stock={stock}
      storage={Data().length}
    />
  );
});

const ProductsBlock = () => {
  return <div className="products">{card}</div>;
};

export default ProductsBlock;
