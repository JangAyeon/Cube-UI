import clsx from "clsx";
import { Portal } from "../../../utils/Portal";
import { type WrapperProps } from "./types";

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
      <div className={clsx(layoutStyle, "flex flex-col relative")}>
        {children}
      </div>
    </Portal>
  );
};

export default Wrapper;
