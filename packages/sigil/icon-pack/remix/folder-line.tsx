import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderLine = /* @__PURE__ */ memo(function FolderLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Line
 * @see {@link https://remixicon.com/icon/folder-line Remix Icon Docs}
 */
export { FolderLine }
