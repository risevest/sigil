import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderReceivedFill = /* @__PURE__ */ memo(function FolderReceivedFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM20 17h3v2h-3v3.5L15 18l5-4.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Received Fill
 * @see {@link https://remixicon.com/icon/folder-received-fill Remix Icon Docs}
 */
export { FolderReceivedFill }
