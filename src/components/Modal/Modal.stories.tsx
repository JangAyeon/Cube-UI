import { type Meta } from "@storybook/react";
import { useState } from "react";
import Modal from ".";
import { Button } from "../Button";
import { CalculatorIcon } from "../../assets/Icon";

const meta: Meta = {
  title: "Components/Modal", // Storybook 내에서 컴포넌트가 표시될 경로
};

export default meta;

export const ModalWithClose = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        colorTheme="red"
        variants="ghost"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        모달 열기
      </Button>
      <Modal.Wrapper
        isOpen={isOpen}
        onClose={onClose}
        layoutStyle="bg-white gap-4 max-w-[30rem] w-full px-6 py-10 rounded-lg"
      >
        <Modal.Header hasCloseButton={true} onClose={onClose}></Modal.Header>
        <Modal.Content>
          <div className="w-full flex flex-col items-center justify-center gap-7 ">
            <CalculatorIcon size={64} />
            <div>
              <div className="text-Body_300 text-center">공학 수학</div>
              <div className="text-Detail_100">해당 강의를 수강하겠습니까?</div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex flex-row w-full gap-2">
            <Button
              colorTheme="primary"
              variants="solid"
              size="lg"
              className="w-full"
            >
              확인
            </Button>
            <Button
              colorTheme="primary"
              variants="outline"
              size="lg"
              className="w-full"
            >
              취소
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Wrapper>
    </>
  );
};

export const ModalWithNoClose = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        colorTheme="red"
        variants="ghost"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        모달 열기
      </Button>
      <Modal.Wrapper
        isOpen={isOpen}
        onClose={onClose}
        layoutStyle="bg-white gap-4 max-w-[30rem] w-full px-6 py-10 rounded-lg"
      >
        <Modal.Content>
          <div className="w-full flex flex-col items-center justify-center gap-7 ">
            <CalculatorIcon size={64} />
            <div>
              <div className="text-Body_300 text-center">공학 수학</div>
              <div className="text-Detail_100">해당 강의를 수강하겠습니까?</div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex flex-row w-full gap-2">
            <Button
              colorTheme="primary"
              variants="solid"
              size="lg"
              className="w-full"
            >
              확인
            </Button>
            <Button
              colorTheme="primary"
              variants="outline"
              size="lg"
              className="w-full"
            >
              취소
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Wrapper>
    </>
  );
};
