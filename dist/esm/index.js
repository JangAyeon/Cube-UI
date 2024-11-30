import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

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
const Button = forwardRef(({ colorTheme = "primary", size = "md", variants = "solid", shape = "square", isDisabled = false, isLoading = false, children, className, ...htmlProps }, ref) => {
    console.log(clsx(COLOR_THEMES[colorTheme], VARIANT_STYLES[variants], BUTTON_SIZES[size], BUTTON_SHAPES[shape], (isDisabled || isLoading) && "cursor-not-allowed opacity-50", className));
    return (jsx("button", { ref: ref, className: clsx(COLOR_THEMES[colorTheme], VARIANT_STYLES[variants], BUTTON_SIZES[size], BUTTON_SHAPES[shape], (isDisabled || isLoading) && "cursor-not-allowed opacity-50", className), disabled: isDisabled || isLoading, ...htmlProps, children: children }));
});
Button.displayName = "Button";

export { Button };
//# sourceMappingURL=index.js.map
