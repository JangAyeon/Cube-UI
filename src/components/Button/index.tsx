import React from "react";
import { type ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
      {content}
    </button>
  );
};

export default Button;
