import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderUnknowFill = /* @__PURE__ */ memo(function FolderUnknowFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 16v2h2v-2zm-2.433-5.187 1.962.393A1.5 1.5 0 1 1 12 13h-1v2h1a3.5 3.5 0 1 0-3.433-4.187" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Unknow Fill
 * @see {@link https://remixicon.com/icon/folder-unknow-fill Remix Icon Docs}
 */
export { FolderUnknowFill }
