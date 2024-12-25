import clsx from "clsx";
import { type ColorListProps } from "./Color.list";

interface ColorChipsProps {
  list: ColorListProps[];
}

const COLOR_STYLES: Record<string, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  blue_100: "bg-blue_100 text-black",
  blue_200: "bg-blue_200 text-white",
  blue_300: "bg-blue_300 text-white",
  primary: "bg-primary text-white",
  red_100: "bg-red_100 text-black",
  red_200: "bg-red_200 text-white",
  red_300: "bg-red_300 text-white",
  red: "bg-red text-white",
  gray_100: "bg-gray_100 text-black",
  gray_200: "bg-gray_200 text-white",
  gray_300: "bg-gray_300 text-white",
  gray_400: "bg-gray_400 text-white",
  gray: "bg-gray text-white",
};

const CHIP_SIZE = "min-w-10 p-10";

const ColorChips: React.FC<ColorChipsProps> = ({ list }) => {
  return (
    <>
      <div className="flex flex-row w-full">
        {list.map(({ name }: ColorListProps) => (
          <div key={name} className={clsx(COLOR_STYLES[name], CHIP_SIZE)}>
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorChips;
