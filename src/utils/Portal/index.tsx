/* eslint-disable multiline-ternary */
import clsx from "clsx";

import ReactDOM from "react-dom";
import { type PortalProps } from "./Portal.types";

export const Portal = ({
  children,
  container,
  onClickBackdrop = () => {},
  customBackdrop = "",
}: PortalProps): React.ReactPortal => {
  const BACKDROP_POSITION = !container
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    : "";
  const BACKDROP_COLOR = customBackdrop ?? "bg-gray bg-opacity-50";

  return ReactDOM.createPortal(
    <>
      {
        <div
          className={clsx(BACKDROP_POSITION, BACKDROP_COLOR)}
          onClick={onClickBackdrop}
        >
          {children}
        </div>
      }
    </>,
    container ?? document.body
  );
};
