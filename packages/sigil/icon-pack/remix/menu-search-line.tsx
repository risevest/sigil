import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M10 8.5a5.5 5.5 0 1 1 10.032 3.117l2.675 2.676-1.414 1.414-2.675-2.675A5.5 5.5 0 0 1 10 8.5M3 4h5v2H3zm0 7h5v2H3zm18 7v2H3v-2z" />
    </Svg>
  )
})
Icon.displayName = 'MenuSearchLine'
/**
 * Remix Icon: Menu Search Line
 * @see {@link https://remixicon.com/icon/menu-search-line Remix Icon Docs}
 */
export const MenuSearchLine = Icon
