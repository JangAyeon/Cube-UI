import { type Meta } from "@storybook/react";

const meta: Meta = {
  title: "Core/Typography", // Storybook 내에서 컴포넌트가 표시될 경로
};

export default meta;

const LAYOUT = "flex flex-col gap-5";
export const Heading = (): JSX.Element => (
  <>
    <div className={LAYOUT}>
      <p className="text-Heading_100">Heading_100</p>
    </div>
  </>
);

export const Title = (): JSX.Element => (
  <>
    <div className={LAYOUT}>
      <p className="text-Title_100">Title_100</p>
      <p className="text-Title_200">Title_200</p>
    </div>
  </>
);
export const Body = (): JSX.Element => (
  <>
    <div className={LAYOUT}>
      <p className="text-Body_100">Body_100</p>
      <p className="text-Body_200">Body_200</p>
      <p className="text-Body_300">Body_300</p>
    </div>
  </>
);

export const Detail = (): JSX.Element => (
  <>
    <div className={LAYOUT}>
      <p className="text-Detail_100">Detail_100</p>
      <p className="text-Detail_200">Detail_200</p>
      <p className="text-Detail_300">Detail_300</p>
    </div>
  </>
);
