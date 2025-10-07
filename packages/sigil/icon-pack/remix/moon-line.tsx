import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 8 8 0 0 0 4 12" />
    </Svg>
  )
})
Icon.displayName = 'MoonLine'
/**
 * Remix Icon: Moon Line
 * @see {@link https://remixicon.com/icon/moon-line Remix Icon Docs}
 */
export const MoonLine = Icon
