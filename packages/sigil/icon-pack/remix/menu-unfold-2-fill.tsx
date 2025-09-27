import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3.5v10l-5-5zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z" />
    </Svg>
  )
})
Icon.displayName = 'MenuUnfold2Fill'
/**
 * Remix Icon: Menu Unfold 2 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-2-fill Remix Icon Docs}
 */
export const MenuUnfold2Fill = Icon
