import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.323 2H4V0h4.677l2 5H21v2h-2.118l-.827 14.059a1 1 0 0 1-.998.941H6.943a1 1 0 0 1-.998-.941L5.118 7H3V5h5.523zm-.202 5 .178 3.025c2.672.11 3.969.605 5.061 1.042 1.051.42 1.92.786 4.227.9L16.879 7z" />
    </Svg>
  )
})
Icon.displayName = 'Drinks2Fill'
/**
 * Remix Icon: Drinks 2 Fill
 * @see {@link https://remixicon.com/icon/drinks-2-fill Remix Icon Docs}
 */
export const Drinks2Fill = Icon
