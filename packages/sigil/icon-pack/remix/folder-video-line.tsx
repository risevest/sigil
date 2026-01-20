import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderVideoLine = /* @__PURE__ */ memo(function FolderVideoLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19V5h5.586l2 2H20v12zM21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667-4.878-3.253a.4.4 0 0 0-.622.333v6.505a.4.4 0 0 0 .622.333L15 13.333a.4.4 0 0 0 0-.666" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Video Line
 * @see {@link https://remixicon.com/icon/folder-video-line Remix Icon Docs}
 */
export { FolderVideoLine }
