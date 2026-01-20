import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SidebarFoldLine = /* @__PURE__ */ memo(function SidebarFoldLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 9 4-3.5v7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sidebar Fold Line
 * @see {@link https://remixicon.com/icon/sidebar-fold-line Remix Icon Docs}
 */
export { SidebarFoldLine }
