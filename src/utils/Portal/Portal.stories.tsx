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
      <div ref={containerRef}>포탈이 보여지는 곳: </div>
      <Button
        colorTheme="primary"
        variants="solid"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Portal {isOpen ? "Opened" : "Closed"}
      </Button>
      {isOpen && <Portal container={containerRef.current}>Portal</Portal>}
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
      {isOpen && <Portal>Portal</Portal>}
    </>
  );
};

export const withBackdropControl = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <>
      <div ref={containerRef}>container Ref</div>
      <Button
        colorTheme="primary"
        variants="solid"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Portal {isOpen ? "Opened" : "Closed"}
      </Button>
      {isOpen && (
        <Portal
          onClickBackdrop={() => {
            setIsOpen(false);
          }}
          container={containerRef.current}
          customBackdrop="p-10 bg-red_100"
        >
          Portal
        </Portal>
      )}
    </>
  );
};
