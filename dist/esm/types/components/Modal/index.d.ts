export declare const Modal: {
    Wrapper: ({ isOpen, onClose, children, onClickBackdrop, layoutStyle, }: import("./Layout/types").WrapperProps) => JSX.Element | null;
    Header: ({ children, onClose, hasCloseButton, }: import("./Layout/types").HeaderProps) => JSX.Element;
    Content: ({ children }: import("./Layout/types").ContentProps) => JSX.Element;
    Footer: ({ children }: import("./Layout/types").FooterProps) => JSX.Element;
};
export default Modal;
