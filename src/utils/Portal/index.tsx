import ReactDOM from "react-dom";
import { type PortalProps } from "./Portal.types";
import { cn } from "../Style/cn";

export const Portal = ({
  children,
  container,
  onClickBackdrop = () => {},
  customBackdrop = undefined,
}: PortalProps): React.ReactPortal => {
  const BACKDROP_POSITION =
    container ??
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

  const BACKDROP_LAYOUT = "w-full h-full flex  items-center justify-center";
  const BACKDROP_COLOR = customBackdrop ?? "bg-gray bg-opacity-70";
  console.log(cn(BACKDROP_POSITION, BACKDROP_COLOR, BACKDROP_LAYOUT));
  return ReactDOM.createPortal(
    <>
      {
        <div
          className={cn(BACKDROP_POSITION, BACKDROP_COLOR, BACKDROP_LAYOUT)}
          onClick={onClickBackdrop}
        >
          {children}
        </div>
      }
    </>,
    container ?? document.body
  );
};
