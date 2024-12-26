import { type Meta } from "@storybook/react";

const meta: Meta = {
  title: "Core/Color", // Storybook 내에서 컴포넌트가 표시될 경로
};

export default meta;

const LAYOUT = "flex flex-row";
const CHIP = "min-w-20 p-10 text-Body_100 text-white";

const COLORS = {
  MAIN_COLORS: [
    { name: "primary", style: "bg-primary text-white" },
    { name: "red", style: "bg-red text-white" },
    { name: "gray", style: "bg-gray text-white" },
  ],
  NEUTRAL_COLORS: [
    { name: "black", style: "bg-black text-white" },
    { name: "white", style: "bg-white !text-black" },
  ],
  BLUE_COLORS: [
    { name: "blue_100", style: "bg-blue_100 !text-black" },
    { name: "blue_200", style: "bg-blue_200 text-white" },
    { name: "blue_300", style: "bg-blue_300 text-white" },
  ],
  RED_COLORS: [
    { name: "red_100", style: "bg-red_100 !text-black" },
    { name: "red_200", style: "bg-red_200 text-white" },
    { name: "red_300", style: "bg-red_300 text-white" },
  ],
  GRAY_COLORS: [
    { name: "gray_100", style: "bg-gray_100 !text-black" },
    { name: "gray_200", style: "bg-gray_200 text-white" },
    { name: "gray_300", style: "bg-gray_300 text-white" },
    { name: "gray_400", style: "bg-gray_400 text-white" },
  ],
};

export const MAIN = (): JSX.Element => (
  <div className={LAYOUT}>
    {COLORS.MAIN_COLORS.map(({ name, style }) => (
      <>
        <div className={`${CHIP} ${style}`}>{name}</div>
      </>
    ))}
  </div>
);

export const NEUTRAL = (): JSX.Element => (
  <div className={LAYOUT}>
    {COLORS.NEUTRAL_COLORS.map(({ name, style }) => (
      <>
        <div className={`${CHIP} ${style}`}>{name}</div>
      </>
    ))}
  </div>
);

export const BLUE = (): JSX.Element => (
  <div className={LAYOUT}>
    {COLORS.BLUE_COLORS.map(({ name, style }) => (
      <>
        <div className={`${CHIP} ${style}`}>{name}</div>
      </>
    ))}
  </div>
);

export const RED = (): JSX.Element => (
  <div className={LAYOUT}>
    {COLORS.RED_COLORS.map(({ name, style }) => (
      <>
        <div className={`${CHIP} ${style}`}>{name}</div>
      </>
    ))}
  </div>
);

export const GRAY = (): JSX.Element => (
  <div className={LAYOUT}>
    {COLORS.GRAY_COLORS.map(({ name, style }) => (
      <>
        <div className={`${CHIP} ${style}`}>{name}</div>
      </>
    ))}
  </div>
);
