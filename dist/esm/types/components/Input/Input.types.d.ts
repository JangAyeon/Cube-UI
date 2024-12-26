export interface InputStyleProps {
    width?: string;
    height?: string;
    className?: string;
    isDisabled?: boolean;
}
export type InputProps = React.ComponentPropsWithoutRef<"input"> & InputStyleProps;
