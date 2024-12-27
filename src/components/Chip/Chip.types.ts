export type ColorTheme = "primary" | "white" | "gray" | "red" | "blue";
export type Size = "sm" | "md" | "lg";
export type Shape = "square" | "round";

export interface ChipStyleProps {
  colorTheme?: ColorTheme;
  shape?: Shape;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export type ChipProps = React.ComponentPropsWithoutRef<"div"> & ChipStyleProps;
