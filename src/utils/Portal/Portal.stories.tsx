import type { Meta } from "@storybook/react";
import { Portal } from ".";
import { useState, useRef } from "react";
import { Button } from "../../components/Button";

const meta: Meta<typeof Portal> = {
  title: "Utils/Portal",
  component: Portal,
};

export default meta;

export const InContainer = (): JSX.Element => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        colorTheme="primary"
        variants="solid"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Portal {isOpen ? "Opened" : "Closed"}
      </Button>
      <div ref={containerRef}>
        {" "}
        <Portal
          isOpen={isOpen}
          onOutsideClick={() => {
            setIsOpen(false);
          }}
          customBackdrop="p-10 bg-red_100"
          container={containerRef.current}
        >
          portal
        </Portal>
      </div>
    </>
  );
};

export const NoContainer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        colorTheme="primary"
        variants="solid"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Portal {isOpen ? "Opened" : "Closed"}
      </Button>
      <Portal isOpen={isOpen} onOutsideClick={() => { setIsOpen(false); }}>
        Portal
      </Portal>
    </>
  );
};

export const NestedClickEvent = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleBtnClick = (e: React.MouseEvent): void => {
    alert("portal btn click");
  };

  return (
    <>
      <div ref={containerRef}>
        container Ref{" "}
        <Button
          colorTheme="primary"
          variants="solid"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          Portal {isOpen ? "Opened" : "Closed"}
        </Button>
        <Portal
          isOpen={isOpen}
          onOutsideClick={() => { setIsOpen(false); }}
          container={containerRef.current}
          customBackdrop="p-10 bg-red_100"
        >
          <Button
            variants="solid"
            colorTheme="primary"
            onClick={handleBtnClick}
          >
            Portal btn
          </Button>
        </Portal>
      </div>
    </>
  );
};
