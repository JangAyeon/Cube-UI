import clsx from "clsx";
import { forwardRef } from "react";
import { type ButtonProps } from "./Button.types";

const COLOR_THEMES = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  black: "bg-black text-white hover:bg-gray-800",
  gray: "bg-gray-500 text-white hover:bg-gray-600",
  red: "bg-red-500 text-white hover:bg-red-600",
};

const VARIANT_STYLES = {
  solid: "",
  outline: "border border-current bg-transparent",
  ghost: "bg-transparent hover:bg-gray-100",
  link: "bg-transparent underline text-blue-500 hover:text-blue-600",
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
    console.log(
      clsx(
        COLOR_THEMES[colorTheme],
        VARIANT_STYLES[variants],
        BUTTON_SIZES[size],
        BUTTON_SHAPES[shape],
        (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )
    );
    return (
      <button
        ref={ref}
        className={clsx(
          COLOR_THEMES[colorTheme],
          VARIANT_STYLES[variants],
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
