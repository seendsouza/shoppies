import React from "react";
const Button = (props) => {
  const { className, htmlType, icon, onClick } = props;

  return (
    <span>
      <button className={className} type={htmlType} onClick={onClick}>
        {icon ? icon : ""}
      </button>
    </span>
  );
};
export default Button;
