import React from "react";

const Label = (props) => {
  const { firm, title, product, portions, freeMouse } = props.label;
  return (
    <div className="label">
      <h3 className="firm question">Котэ не одобряет?</h3>
      <h3 className="firm">{firm}</h3>
      <h1 className="title">{title}</h1>
      <h2 className="title-description">{product}</h2>
      <p className="portions">{portions}</p>
      <p className="description">{freeMouse}</p>
    </div>
  );
};

export default Label;
