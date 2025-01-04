import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const COLOR_THEMES$1 = {
    primary: {
        solid: "bg-primary border-primary text-white hover:bg-blue_300",
        outline: "text-primary border border-primary hover:bg-blue_100",
        ghost: "text-primary bg-transparent hover:bg-blue_100",
        link: "text-primary underline hover:text-blue_300",
    },
    black: {
        solid: "bg-black border-black text-white hover:bg-gray_400",
        outline: "text-black border border-black hover:bg-gray",
        ghost: "text-black bg-transparent hover:bg-gray_100",
        link: "text-black underline hover:text-gray_400",
    },
    gray: {
        solid: "bg-gray border-gray text-white hover:bg-gray_300",
        outline: "text-gray border border-gray hover:bg-gray_100",
        ghost: "text-gray bg-transparent hover:bg-gray_100",
        link: "text-gray underline hover:text-gray_300",
    },
    red: {
        solid: "bg-red border-red text-white hover:bg-red_300",
        outline: "text-red border border-red hover:bg-red_100",
        ghost: "text-red bg-transparent hover:bg-red_100",
        link: "text-red underline hover:text-red_300",
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
const Button = forwardRef(({ colorTheme = "primary", size = "md", variants = "solid", shape = "square", isDisabled = false, isLoading = false, children, className, ...htmlProps }, ref) => {
    /* console.log(
      clsx(
        COLOR_THEMES[colorTheme][variants ?? "solid"],
        BUTTON_SIZES[size],
        BUTTON_SHAPES[shape],
        (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )
    ); */
    return (jsx("button", { ref: ref, className: clsx(COLOR_THEMES$1[colorTheme][variants ?? "solid"], BUTTON_SIZES[size], BUTTON_SHAPES[shape], (isDisabled || isLoading) && "cursor-not-allowed opacity-50", className), disabled: isDisabled || isLoading, ...htmlProps, children: children }));
});
Button.displayName = "Button";

const BASE = "min-h-[4.8rem] px-[1.2rem] py-[0.8rem] box-border";
const TEXT_STYLE = "text-Detail_100";
const BORDER_STYLE = "border rounded-[1.2rem] border-gray_200";
const INTERACTION = "focus:outline-none focus:border-primary";
const PLACEHOLDER_STYLE = "placeholder:text-gray_200 placeholder:text-Detail_100";
const DISABLED_STYLE = "disabled:border-red disabled:text-red disabled:bg-white";
const Input = forwardRef(({ width = "w-full", height = "h-[4.8rem]", className, isDisabled = false, ...htmlProps }, ref) => {
    console.log(clsx(width, height, isDisabled, className));
    return (jsx("input", { ref: ref, className: clsx(BASE, TEXT_STYLE, BORDER_STYLE, INTERACTION, PLACEHOLDER_STYLE, DISABLED_STYLE, width, height, className), disabled: isDisabled, ...htmlProps }));
});
Input.displayName = "Input";

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
const Chip = forwardRef(({ colorTheme = "primary", size = "md", shape = "square", children, className, ...htmlProps }, ref) => {
    /* console.log(
      clsx(
        COLOR_THEMES[colorTheme][variants ?? "solid"],
        BUTTON_SIZES[size],
        BUTTON_SHAPES[shape],
        (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )
    ); */
    return (jsx("div", { ref: ref, className: clsx(COLOR_THEMES[colorTheme], CHIP_SIZES[size], CHIP_SHAPES[shape], className), ...htmlProps, children: children }));
});
Chip.displayName = "Chip";

export { Button, Chip, Input };
//# sourceMappingURL=index.js.map
