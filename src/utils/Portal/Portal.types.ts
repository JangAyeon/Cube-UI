import { type ReactNode } from "react";

export interface PortalProps {
  isOpen: boolean;
  children: ReactNode;
  container?: Element | null;
  onOutsideClick?: () => void;
  customBackdrop?: string;
}
