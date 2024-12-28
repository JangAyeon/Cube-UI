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
  const BACKDROP_LAYOUT =
    "w-full h-full  flex items-center justify-center z-50";
  const BACKDROP_COLOR = customBackdrop ?? "bg-gray bg-opacity-50";

  return ReactDOM.createPortal(
    <>
      {
        <div
          className={clsx(BACKDROP_LAYOUT, BACKDROP_COLOR)}
          onClick={onClickBackdrop}
        >
          {children}
        </div>
      }
    </>,
    container ?? document.body
  );
};
