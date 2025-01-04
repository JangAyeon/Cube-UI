import { CloseIcon } from "../../../assets/Icon";
import { type HeaderProps } from "./types";

const Header = ({
  children,
  onClose,
  hasCloseButton = false,
}: HeaderProps): JSX.Element => {
  return (
    <div className="flex flex-row justify-between">
      {children}
      {hasCloseButton && (
        <button className="absolute top-1 right-1" onClick={onClose}>
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  );
};

export default Header;
