import clsx from "clsx";
import { forwardRef } from "react";
import { type ButtonProps } from "./Button.types";

const COLOR_THEMES = {
  primary: {
    solid: "bg-blue-500 border-blue-500 text-white hover:bg-blue-600",
    outline: "text-blue-500 border border-blue-500 hover:bg-blue-100",
    ghost: "text-blue-500 bg-transparent hover:bg-blue-100",
    link: "text-blue-500 underline hover:text-blue-600",
  },
  black: {
    solid: "bg-black border-black text-white hover:bg-gray-800",
    outline: "text-black border border-black hover:bg-gray-200",
    ghost: "text-black bg-transparent hover:bg-gray-100",
    link: "text-black underline hover:text-gray-800",
  },
  gray: {
    solid: "bg-gray-500 border-gray-500 text-white hover:bg-gray-600",
    outline: "text-gray-500 border border-gray-500 hover:bg-gray-100",
    ghost: "text-gray-500 bg-transparent hover:bg-gray-50",
    link: "text-gray-500 underline hover:text-gray-600",
  },
  red: {
    solid: "bg-red-500 border-red-500 text-white hover:bg-red-600",
    outline: "text-red-500 border border-red-500 hover:bg-red-100",
    ghost: "text-red-500 bg-transparent hover:bg-red-50",
    link: "text-red-500 underline hover:text-red-600",
  },
};

const BUTTON_SIZES = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

const BUTTON_SHAPES = {
  square: "rounded-md",
  round: "rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorTheme = "primary",
      size = "md",
      variants = "solid",
      shape = "square",
      isDisabled = false,
      isLoading = false,
      children,
      className,
      ...htmlProps
    },
    ref
  ) => {
    /* console.log(
      clsx(
        COLOR_THEMES[colorTheme][variants ?? "solid"],
        BUTTON_SIZES[size],
        BUTTON_SHAPES[shape],
        (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )
    ); */

    return (
      <button
        ref={ref}
        className={clsx(
          COLOR_THEMES[colorTheme][variants ?? "solid"],
          BUTTON_SIZES[size],
          BUTTON_SHAPES[shape],
          (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
          className
        )}
        disabled={isDisabled || isLoading}
        {...htmlProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
