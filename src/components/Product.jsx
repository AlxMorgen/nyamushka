import React from "react";
import cat from "../img/cat.png";
import { useState } from "react";
import Label from "./Label";
import handlerLeave from "./handlerLeave";
import Border from "./Border";
import handlerClick from "./handlerClick";
import handlerhover from "./handlerHover";

const Product = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  const { weigth, stock, product, description } = props;

  return (
    <div
      className={`${!isSelected ? "product" : "product selected"} ${
        !isQuestion ? "" : "question-hover"
      }`}
    >
      <div
        className="product-inner"
        onMouseLeave={() => {
          handlerLeave(isSelected, setIsQuestion);
        }}
        onMouseEnter={() => {
          handlerhover(isSelected, isQuestion, setIsQuestion);
        }}
        onClick={() => {
          handlerClick(isSelected, setIsSelected, setIsQuestion);
        }}
      >
        <img className="cat-img" src={cat} alt="cat" />
        <span className="ball">
          <div className="weight">
            <p>{weigth}</p>
            <p>кг</p>
          </div>
        </span>
        <Label label={props} />
        <Border />
      </div>
      <div className={stock > 0 ? "buy" : "buy hidden"}>
        <p>
          Чего сидишь? Порадуй котэ,{" "}
          <span
            className={"buy-link"}
            onClick={() => setIsSelected(!isSelected)}
          >
            {" "}
            купи.
          </span>
        </p>
      </div>
      <p className="composition">{description}</p>
      <div className={stock > 0 ? "disable hidden" : "disable"}></div>
      <div className={stock === 0 ? "buy sad" : "buy sad hidden"}>
        Печалька, {product} закончился.
      </div>
    </div>
  );
};

export default Product;
