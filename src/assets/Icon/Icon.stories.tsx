import { type StoryObj, type Meta } from "@storybook/react";
import { CloseIcon, PiggyBankIcon, SettingIcon, CalculatorIcon } from ".";
const meta: Meta<typeof CloseIcon> = {
  title: "Assets/Icon",
  component: (args) => (
    <div className="flex flex-row gap-4">
      <PiggyBankIcon {...args} />
      <CloseIcon {...args} />
      <SettingIcon {...args} />
      <CalculatorIcon {...args} />
    </div>
  ),
  tags: ["autodocs"], // 자동으로 문서를 생성하는 태그
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      description: "icon width and height",
      options: [12, 14, 16, 20, 24, 32, 40, 52, 64],
      defaultValue: 16,
    },
    fillColor: {
      control: { type: "color" },
      description: "Fill color of the icon",
      defaultValue: "#000000",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {
  args: {
    size: 16, // 기본 props 설정
    fillColor: "#000000",
  },
};

export const ChangeColor: Story = {
  args: {
    fillColor: "#6ec31a",
  },
};

export const ChangeSize: Story = {
  args: {
    size: 64, // 기본 props 설정
  },
};
