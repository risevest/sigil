import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.05 8.047 12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269 5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538-1.414-1.414-7.072 7.071 1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12" />
    </Svg>
  )
})
Icon.displayName = 'WaterPercentLine'
/**
 * Remix Icon: Water Percent Line
 * @see {@link https://remixicon.com/icon/water-percent-line Remix Icon Docs}
 */
export const WaterPercentLine = Icon
