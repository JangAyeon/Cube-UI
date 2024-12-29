export interface WrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onClickBackdrop?: () => void;
  layoutStyle?: string;
}

export interface HeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
  hasCloseButton?: boolean;
}
export interface ContentProps {
  children: React.ReactNode;
}

export interface FooterProps {
  children: React.ReactNode;
}
