import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // Storybook 내에서 컴포넌트가 표시될 경로
  component: Button,
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  argTypes: {
    /* children: {
      children: <div> text</div>,
      description: "Button text content",
    }, // 컨트롤 추가 */
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    colorTheme: "red", // 기본 props 설정
    children: <div> text</div>,
  },
};
/*
export const Primary: Story = {
  args: {
    content: "Primary Button"
  }
};

export const WithLongText: Story = {
  args: {
    content: "This is a button with a longer text"
  }
};
*/
