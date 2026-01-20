import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderTransferFill = /* @__PURE__ */ memo(function FolderTransferFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM12 12H8v2h4v3l4-4-4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Transfer Fill
 * @see {@link https://remixicon.com/icon/folder-transfer-fill Remix Icon Docs}
 */
export { FolderTransferFill }
