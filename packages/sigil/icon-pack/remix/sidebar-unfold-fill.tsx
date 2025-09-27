import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM7 8.5l4 3.5-4 3.5z" />
    </Svg>
  )
})
Icon.displayName = 'SidebarUnfoldFill'
/**
 * Remix Icon: Sidebar Unfold Fill
 * @see {@link https://remixicon.com/icon/sidebar-unfold-fill Remix Icon Docs}
 */
export const SidebarUnfoldFill = Icon
