export interface IconStyleProps {
  size?: 12 | 14 | 16 | 20 | 24 | 32 | 40 | 52 | 64;
  fillColor?: string;
}

export type IconProps = React.ComponentPropsWithoutRef<"svg"> & IconStyleProps;
