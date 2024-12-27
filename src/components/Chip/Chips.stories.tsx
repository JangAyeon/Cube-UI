import { type Meta, type StoryObj } from "@storybook/react";

import { Chip } from ".";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip", // Storybook 내에서 컴포넌트가 표시될 경로
  component: Chip,
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  parameters: {
    layout: "centered",
  },
  argTypes: {
    colorTheme: {
      control: "select",
      description: "Chip color Theme",
      defaultValue: "primary",
      options: ["primary", "white", "gray", "red", "blue"],
    },
    size: {
      control: "select",
      description: "Chip sizes",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
      description: "Content to be displayed inside the chip",
      defaultValue: "Default Chip",
    },
    className: {
      control: "text",
      description: "Custom Tailwind CSS class to apply to the chip",
    },
    shape: {
      control: "select",
      description: "Chip shape",
      defaultValue: "square",
      options: ["square", "round"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    colorTheme: "primary",
    size: "md",
    children: "Default Chip",
    shape: "square",
  },
};

export const Rounded: Story = {
  args: {
    colorTheme: "blue",
    size: "lg",
    children: "Rounded Chip",
    shape: "round",
  },
};

export const SmallGray: Story = {
  args: {
    colorTheme: "gray",
    size: "sm",
    children: "Small Gray Chip",
    shape: "square",
  },
};

export const RedWithClassName: Story = {
  args: {
    colorTheme: "red",
    size: "md",
    children: "Red Chip with Custom Class",
    shape: "square",
    className: "border-2 border-red_300 border-dashed",
  },
};

export const WhiteRound: Story = {
  args: {
    colorTheme: "white",
    size: "lg",
    children: "White Round Chip",
    shape: "round",
  },
};
