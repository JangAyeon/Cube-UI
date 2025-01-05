import { Portal } from "../../../utils/Portal";
import { type WrapperProps } from "./types";
import { cn } from "../../../utils/Style/cn";

export const Wrapper = ({
  isOpen,
  onClose,
  children,
  onClickBackdrop = undefined,
  layoutStyle = undefined,
}: WrapperProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal onClickBackdrop={onClickBackdrop ?? onClose}>
      <div className={cn(layoutStyle, "flex flex-col relative")}>
        {children}
      </div>
    </Portal>
  );
};

export default Wrapper;
