import ReactDOM from "react-dom";
import { type PortalProps } from "./Portal.types";
import { cn } from "../Style/cn";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

export const Portal = ({
  isOpen,
  children,
  container,
  onOutsideClick = () => {},
  customBackdrop = undefined,
}: PortalProps): React.ReactPortal | undefined => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const BACKDROP_POSITION =
    container == null
      ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      : "";

  const BACKDROP_LAYOUT =
    container == null
      ? "w-full h-full flex  items-center justify-center"
      : "w-full relative top-2.5";
  const BACKDROP_COLOR = customBackdrop ?? "bg-gray bg-opacity-70";
  console.log(cn(BACKDROP_POSITION, BACKDROP_COLOR, BACKDROP_LAYOUT));

  useOutsideClick(contentRef, onOutsideClick);
  if (!isOpen) return;
  return ReactDOM.createPortal(
    <>
      {
        <div
          id="protal-id"
          ref={contentRef}
          className={cn(BACKDROP_POSITION, BACKDROP_COLOR, BACKDROP_LAYOUT)}
        >
          {children}
        </div>
      }
    </>,
    container ?? document.body
  );
};
