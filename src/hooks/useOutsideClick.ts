import { type RefObject, useEffect } from "react";
const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | null,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      // console.log(event.target?.id, event.target);
      const eTarget = event.target as HTMLDivElement;
      const refTarget = ref?.current;
      if (eTarget && refTarget && eTarget.id === refTarget.id) {
        console.log("clkose", refTarget.id, eTarget);
        handler(event);
      }
    };

    document.addEventListener("click", listener);
    // document.addEventListener("mousedown", listener);
    // document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("click", listener);
      // document.removeEventListener("mousedown", listener);
      // document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

export default useOutsideClick;
