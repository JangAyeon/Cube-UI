'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const COLOR_THEMES = {
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
const Button = react.forwardRef(({ colorTheme = "primary", size = "md", variants = "solid", shape = "square", isDisabled = false, isLoading = false, children, className, ...htmlProps }, ref) => {
    /* console.log(
      clsx(
        COLOR_THEMES[colorTheme][variants ?? "solid"],
        BUTTON_SIZES[size],
        BUTTON_SHAPES[shape],
        (isDisabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )
    ); */
    return (jsxRuntime.jsx("button", { ref: ref, className: clsx(COLOR_THEMES[colorTheme][variants ?? "solid"], BUTTON_SIZES[size], BUTTON_SHAPES[shape], (isDisabled || isLoading) && "cursor-not-allowed opacity-50", className), disabled: isDisabled || isLoading, ...htmlProps, children: children }));
});
Button.displayName = "Button";

exports.Button = Button;
//# sourceMappingURL=index.js.map
