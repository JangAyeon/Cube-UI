import { type Meta } from "@storybook/react";
import { Input } from ".";
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Whether the input is disabled or not.",
      defaultValue: false,
    },
    width: {
      control: "text",
      description: "TailwindCSS width class (e.g., 'w-full', 'w-[200px]')",
      defaultValue: "w-full",
    },
    height: {
      control: "text",
      description: "TailwindCSS height class (e.g., 'h-[48px]')",
      defaultValue: "h-[4.8rem]",
    },
    className: {
      control: "text",
      description: "Custom CSS class to apply additional styles.",
    },
  },
};

export default meta;

export const Default = (): JSX.Element => (
  <>
    <Input placeholder="Default Input" />
  </>
);

export const Disabled = (): JSX.Element => (
  <Input placeholder="Disabled Input" isDisabled />
);

export const CustomWidth = (): JSX.Element => (
  <Input placeholder="Custom Width" width="w-[80rem]" />
);

export const CustomHeigth = (): JSX.Element => (
  <Input placeholder="Custom height" width="h-[50rem]" />
);

export const CustomStyle = (): JSX.Element => (
  <Input placeholder="Custom style: no border" className="border-0" />
);
