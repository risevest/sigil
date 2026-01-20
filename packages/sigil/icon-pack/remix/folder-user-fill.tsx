import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderUserFill = /* @__PURE__ */ memo(function FolderUserFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-4 5h8a4 4 0 0 0-8 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder User Fill
 * @see {@link https://remixicon.com/icon/folder-user-fill Remix Icon Docs}
 */
export { FolderUserFill }
