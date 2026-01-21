import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FoldersFill = /* @__PURE__ */ memo(function FoldersFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 2H4v10h12v-2H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folders Fill
 * @see {@link https://remixicon.com/icon/folders-fill Remix Icon Docs}
 */
export { FoldersFill }
