import { forwardRef } from "react";
import { type InputProps } from "./Input.types";
import clsx from "clsx";

const BASE = "min-h-[4.8rem] px-[1.2rem] py-[0.8rem] box-border";
const TEXT_STYLE = "text-Detail_100";
const BORDER_STYLE = "border rounded-[1.2rem] border-gray_200";
const INTERACTION = "focus:outline-none focus:border-primary";
const PLACEHOLDER_STYLE =
  "placeholder:text-gray_200 placeholder:text-Detail_100";
const DISABLED_STYLE =
  "disabled:border-red disabled:text-red disabled:bg-white";
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "w-full",
      height = "h-[4.8rem]",
      className,
      isDisabled = false,
      ...htmlProps
    },
    ref
  ) => {
    console.log(clsx(width, height, isDisabled, className));
    return (
      <input
        ref={ref}
        className={clsx(
          BASE,
          TEXT_STYLE,
          BORDER_STYLE,
          INTERACTION,
          PLACEHOLDER_STYLE,
          DISABLED_STYLE,
          width,
          height,
          className
        )}
        disabled={isDisabled}
        {...htmlProps}
      />
    );
  }
);
Input.displayName = "Input";
