import { memo } from "react";
import type { IconProps } from "../../types";
import { Svg, Path, Rect } from "react-native-svg";

const Icon = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg
      viewBox="0 0 21 20"
      fill={color}
      height={size}
      width={size}
      {...otherProps}
    >
      <Rect x={1} y={0.5} width={19} height={19} rx={9.5} fill="#0898A0" />
      <Rect x={1} y={0.5} width={19} height={19} rx={9.5} stroke="#0898A0" />
      <Path
        d="M6.5 11.2667L8.81111 13.4L14.5 7"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

Icon.displayName = "CheckMark";

export const CheckMark = memo(Icon);
