import * as react from 'react';

type ColorTheme = "primary" | "black" | "gray" | "red";
type Size = "sm" | "md" | "lg";
type Variants = "solid" | "outline" | "ghost" | "link";
type Shape = "square" | "round";
interface ButtonStyleProps {
    variants?: Variants;
    size?: Size;
    shape?: Shape;
    colorTheme?: ColorTheme;
    className?: string;
    children: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
}

declare const Button: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & ButtonStyleProps & react.RefAttributes<HTMLButtonElement>>;

export { Button };