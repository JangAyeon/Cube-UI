import { type StoryObj, type Meta } from "@storybook/react";
import { COLOR_PICKS, Colors } from ".";

const meta: Meta = {
  title: "Core/Color", // Storybook 내에서 컴포넌트가 표시될 경로
  component: Colors,
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      description: "color Theme",
      defaultValue: "primary",
    },
  },
};

type Story = StoryObj<typeof Colors>;
export const MAIN: Story = {
  args: {
    color: COLOR_PICKS.MAIN,
  },
};
export default meta;
