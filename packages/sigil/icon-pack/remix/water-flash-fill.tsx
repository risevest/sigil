import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.64 6.639 12.006.275l6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728m7.365 4.364v-4.5l-4.5 6.5h2.5v4.5l4.5-6.5z" />
    </Svg>
  )
})
Icon.displayName = 'WaterFlashFill'
/**
 * Remix Icon: Water Flash Fill
 * @see {@link https://remixicon.com/icon/water-flash-fill Remix Icon Docs}
 */
export const WaterFlashFill = Icon
