import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm4-1V7l-5 5z" />
    </Svg>
  )
})
Icon.displayName = 'MenuUnfold4Fill'
/**
 * Remix Icon: Menu Unfold 4 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-4-fill Remix Icon Docs}
 */
export const MenuUnfold4Fill = Icon
