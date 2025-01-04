import * as react from 'react';

type ColorTheme$1 = "primary" | "black" | "gray" | "red";
type Size$1 = "sm" | "md" | "lg";
type Variants = "solid" | "outline" | "ghost" | "link";
type Shape$1 = "square" | "round";
interface ButtonStyleProps {
    colorTheme?: ColorTheme$1;
    variants?: Variants;
    shape?: Shape$1;
    size?: Size$1;
    className?: string;
    children: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
}

declare const Button: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & ButtonStyleProps & react.RefAttributes<HTMLButtonElement>>;

interface InputStyleProps {
    width?: string;
    height?: string;
    className?: string;
    isDisabled?: boolean;
}

declare const Input: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & InputStyleProps & react.RefAttributes<HTMLInputElement>>;

type ColorTheme = "primary" | "white" | "gray" | "red" | "blue";
type Size = "sm" | "md" | "lg";
type Shape = "square" | "round";
interface ChipStyleProps {
    colorTheme?: ColorTheme;
    shape?: Shape;
    size?: Size;
    className?: string;
    children: React.ReactNode;
}

declare const Chip: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & ChipStyleProps & react.RefAttributes<HTMLDivElement>>;

export { Button, Chip, Input };
