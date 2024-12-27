import { forwardRef } from "react";
import { type ChipProps } from "./Chip.types";
import clsx from "clsx";

const COLOR_THEMES = {
  primary: "bg-primary border border-primary text-white",
  white: "bg-white border border-gray_200 text-black",
  gray: "bg-gray_100 border border-gray_100 text-gray",
  red: "bg-red_100 border border-red_100 text-red",
  blue: "bg-blue_100 border border-blue_100 text-blue_200",
};

const CHIP_SIZES = {
  sm: "min-h-8 p-3 text-Detail_100",
  md: "min-h-10 p-5 text-Detail_200",
  lg: "min-h-12 p-7 text-Detail_300",
};

const CHIP_SHAPES = {
  square: "rounded-md",
  round: "rounded-full",
};
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      colorTheme = "primary",
      size = "md",
      shape = "square",
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
      <div
        ref={ref}
        className={clsx(
          COLOR_THEMES[colorTheme],
          CHIP_SIZES[size],
          CHIP_SHAPES[shape],
          className
        )}
        {...htmlProps}
      >
        {children}
      </div>
    );
  }
);

Chip.displayName = "Chip";
