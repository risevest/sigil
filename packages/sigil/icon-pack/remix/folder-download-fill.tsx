import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderDownloadFill = /* @__PURE__ */ memo(function FolderDownloadFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM13 13V9h-2v4H8l4 4 4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Download Fill
 * @see {@link https://remixicon.com/icon/folder-download-fill Remix Icon Docs}
 */
export { FolderDownloadFill }
