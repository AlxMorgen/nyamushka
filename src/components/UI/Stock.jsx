import React from "react";

const Stock = (stock) => {
  return (
    <div className={stock.stockValue > 0 ? "disable hidden" : "disable"}></div>
    
  );
};

export default Stock;
