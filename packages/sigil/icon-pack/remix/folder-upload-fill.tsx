import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderUploadFill = /* @__PURE__ */ memo(function FolderUploadFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM13 13h3l-4-4-4 4h3v4h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Upload Fill
 * @see {@link https://remixicon.com/icon/folder-upload-fill Remix Icon Docs}
 */
export { FolderUploadFill }
