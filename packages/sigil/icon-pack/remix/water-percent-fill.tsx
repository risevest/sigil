import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 .269 5.636 6.633a9 9 0 1 0 12.728 0zm4.243 9.902-7.071 7.072-1.415-1.415 7.072-7.07zM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.121-2.121m7.778 7.778a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12" />
    </Svg>
  )
})
Icon.displayName = 'WaterPercentFill'
/**
 * Remix Icon: Water Percent Fill
 * @see {@link https://remixicon.com/icon/water-percent-fill Remix Icon Docs}
 */
export const WaterPercentFill = Icon
