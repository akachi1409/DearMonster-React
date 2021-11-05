import React from "react";

function Button({ title, classes, onClick }) {
  return (
    <button
      className={
        "text-center text-white rounded-2xl hover:bg-gray-500 " + classes
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
