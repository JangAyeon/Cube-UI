import { type Meta } from "@storybook/react";
import { useState } from "react";
import Modal from ".";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Modal", // Storybook 내에서 컴포넌트가 표시될 경로
};

export default meta;

export const ModalDefaultWithClose = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Button colorTheme="red" variants="ghost" onClick={() => setIsOpen(true)}>
        모달 열기
      </Button>
      <Modal.Wrapper
        isOpen={isOpen}
        onClose={onClose}
        layoutStyle="bg-white gap-4 max-w-[32rem] w-full"
      >
        <Modal.Header hasCloseButton={true} onClose={onClose}>
          <div className="text-Title_200 px-6 py-4">타이틀</div>
        </Modal.Header>
        <Modal.Content>
          <div className="text-Detail_300 px-6 py-4">콘텐츠</div>
        </Modal.Content>
        <Modal.Footer>
          <div className="flex flex-col w-full gap-2 px-6 py-4">
            <Button colorTheme="primary" variants="solid">
              확인
            </Button>
            <Button colorTheme="primary" variants="outline">
              취소
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Wrapper>
    </>
  );
};
