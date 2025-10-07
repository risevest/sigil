import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z" />
    </Svg>
  )
})
Icon.displayName = 'Menu4Fill'
/**
 * Remix Icon: Menu 4 Fill
 * @see {@link https://remixicon.com/icon/menu-4-fill Remix Icon Docs}
 */
export const Menu4Fill = Icon
