import ColorChips from "./Color.chips";
import {
  MAIN_COLORS,
  NEUTRAL_COLORS,
  BLUE_COLORS,
  RED_COLORS,
  GRAY_COLORS,
} from "./Color.list";

export const enum COLOR_PICKS {
  MAIN = "MAIN",
  NEUTRAL = "NEUTRAL",
  BLUE = "BLUE",
  RED = "RED",
  GRAY = "GRAY",
}

export const Colors = ({
  color = COLOR_PICKS.MAIN,
}: {
  color: COLOR_PICKS;
}): JSX.Element => {
  const renderColorComponent = (): JSX.Element => {
    switch (color) {
      case COLOR_PICKS.MAIN:
        return <ColorChips list={MAIN_COLORS} />;
      case COLOR_PICKS.NEUTRAL:
        return <ColorChips list={NEUTRAL_COLORS} />;
      case COLOR_PICKS.BLUE:
        return <ColorChips list={BLUE_COLORS} />;
      case COLOR_PICKS.RED:
        return <ColorChips list={RED_COLORS} />;
      case COLOR_PICKS.GRAY:
        return <ColorChips list={GRAY_COLORS} />;
      default:
        return <ColorChips list={MAIN_COLORS} />;
    }
  };

  return <>{renderColorComponent()}</>;
};

Colors.displayName = "Colors";
