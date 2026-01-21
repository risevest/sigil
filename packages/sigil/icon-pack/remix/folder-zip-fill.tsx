import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderZipFill = /* @__PURE__ */ memo(function FolderZipFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H16v2h2V5zm-3 8h-2v2h-2v3h4zm-2-2h-2v2h2zm2-2h-2v2h2zm-2-2h-2v2h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Zip Fill
 * @see {@link https://remixicon.com/icon/folder-zip-fill Remix Icon Docs}
 */
export { FolderZipFill }
