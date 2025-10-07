import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18v2H3v-2zM7 3.5v10l-5-5zM21 11v2h-9v-2zm0-7v2h-9V4z" />
    </Svg>
  )
})
Icon.displayName = 'MenuFoldFill'
/**
 * Remix Icon: Menu Fold Fill
 * @see {@link https://remixicon.com/icon/menu-fold-fill Remix Icon Docs}
 */
export const MenuFoldFill = Icon
