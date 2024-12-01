import { type Meta, type StoryObj } from "@storybook/react";

import { expect, fireEvent, within } from "@storybook/test";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // Storybook 내에서 컴포넌트가 표시될 경로
  component: Button,
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  parameters: {
    layout: "centered",
  },
  argTypes: {
    colorTheme: {
      control: "select",
      description: "button color Theme",
      defaultValue: "primary",
    },
    variants: {
      control: "select",
      description: "button variants",
      defaultValue: "solid",
    },
    size: {
      control: "select",
      description: "button sizes",
      defaultValue: "md",
    },
    children: {
      control: "text",
      description: "Content to be displayed inside button",
      defaultValue: <div> text me</div>,
    },

    className: {
      control: "text",
      description: "Custom tailwind CSS class to apply to the button",
    },
    shape: {
      control: "select",
      description: "button shape",
      defaultValue: "square",
    },
    isDisabled: {
      control: "boolean",
      description: "show button is able to work",
      defaultValue: "false",
    },
    isLoading: {
      control: "boolean",
      description: "show button is ready to be used",
      defaultValue: "false",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    colorTheme: "primary", // 기본 props 설정
    children: <div> text</div>,
  },
};

export const Disabled: Story = {
  args: {
    colorTheme: "red", // 기본 props 설정
    children: <div> text</div>,
    shape: "round",
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. 버튼 랜더링 확인
    const button = await canvas.findByRole("button");
    await expect(button).toBeInTheDocument();

    // 2. 버튼 비활성화 확인
    await fireEvent.click(button);
    await expect(button).toBeDisabled();
  },
};
