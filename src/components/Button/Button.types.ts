export type ColorTheme = "primary" | "black" | "gray" | "red";
export type Size = "sm" | "md" | "lg";
export type Variants = "solid" | "outline" | "ghost" | "link";
export type Shape = "square" | "round";

export interface ButtonStyleProps {
  colorTheme?: ColorTheme;
  variants?: Variants;
  shape?: Shape;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonStyleProps;
