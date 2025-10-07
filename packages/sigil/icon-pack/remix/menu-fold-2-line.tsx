import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.403 3.903 2.99 5.318 6.171 8.5 2.99 11.682l1.414 1.414L9 8.5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z" />
    </Svg>
  )
})
Icon.displayName = 'MenuFold2Line'
/**
 * Remix Icon: Menu Fold 2 Line
 * @see {@link https://remixicon.com/icon/menu-fold-2-line Remix Icon Docs}
 */
export const MenuFold2Line = Icon
