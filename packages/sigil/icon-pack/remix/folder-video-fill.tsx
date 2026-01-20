import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderVideoFill = /* @__PURE__ */ memo(function FolderVideoFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667a.4.4 0 0 1 0 .666l-4.878 3.252a.4.4 0 0 1-.622-.333V9.747a.4.4 0 0 1 .622-.333z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Video Fill
 * @see {@link https://remixicon.com/icon/folder-video-fill Remix Icon Docs}
 */
export { FolderVideoFill }
