import React from "react";
import cat from "../../img/cat.png";
import { useState } from "react";
import Label from "./Label";
import Stock from "./Stock";


const Product = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
 
  
 
  return (
    <div className={`${!isSelected ? "product" : "product selected"} ${!isHover ? "" : "hover"}`} >
      <div
        className="product-inner"
        onClick={() => {
          if(isSelected) {
            setIsHover(false)
          }
          setIsSelected(!isSelected);
          
          
        }}
        onMouseLeave ={() => {
          if (isSelected) {
            setIsHover(false)
          }
        }}
        onMouseEnter = {() => {
          if (isSelected) {
            setIsHover(true)
          }
        }}
      >
        <svg
          className="svg"
          width="320"
          height="480"
          viewBox="0 0 320 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_47_25" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"
            />
          </mask>
          <path
            className="border"
            d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z"
            fill="#1698D9"
            mask="url(#path-1-inside-1_47_25)"
          />
        </svg>
        <img className="cat-img" src={cat} alt="cat" srcSet="" />
        <span className="ball">
          <div className="weight">
            <p>{props.weigth}</p>
            <p>кг</p>
          </div>
        </span>
        <Label label={props} />
      </div>
      <div className={(props.stock > 0) ? "buy" : "buy hidden"}>
        <p>
          Чего сидишь? Порадуй котэ,{" "}
          <a
            className={ "buy-link"}
            onClick={() => setIsSelected(!isSelected)}
            href="/#"
          >
            купи.
          </a>{" "}
        </p>
      </div>
      <p className="composition">{props.composition}</p>
      <Stock stockValue = {props.stock} />
      <div className={(props.stock === 0) ? "buy sad" : "buy sad hidden"}>{props.sad}</div>
    </div>
  );
};

export default Product;
