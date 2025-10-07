import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
    </Svg>
  )
})
Icon.displayName = 'Menu2Fill'
/**
 * Remix Icon: Menu 2 Fill
 * @see {@link https://remixicon.com/icon/menu-2-fill Remix Icon Docs}
 */
export const Menu2Fill = Icon
