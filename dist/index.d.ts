import * as react from 'react';

type ColorTheme = "primary" | "black" | "gray" | "red";
type Size = "sm" | "md" | "lg";
type Variants = "solid" | "outline" | "ghost" | "link";
type Shape = "square" | "round";
interface ButtonStyleProps {
    colorTheme?: ColorTheme;
    variants?: Variants;
    shape?: Shape;
    size?: Size;
    className?: string;
    children: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
}

declare const Button: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & ButtonStyleProps & react.RefAttributes<HTMLButtonElement>>;

declare const tailwindPreset: {
    theme: {
        extend: {
            colors: {
                black: string;
                white: string;
                blue_100: string;
                blue_200: string;
                blue_300: string;
                primary: string;
                red_100: string;
                red_200: string;
                red_300: string;
                red: string;
                gray_100: string;
                gray_200: string;
                gray_300: string;
                gray_400: string;
                gray: string;
            };
            fontSize: {
                Heading_100: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Title_200: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Title_100: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Detail_300: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Detail_200: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Detail_100: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Body_300: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Body_200: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
                Body_100: (string | {
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                })[];
            };
        };
    };
};

export { Button, tailwindPreset };
