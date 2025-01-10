import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`rounded-[10px] px-5 font-Inter text-[16px] font-semibold leading-[20px] text-white ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;