import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderAddLine = /* @__PURE__ */ memo(function FolderAddLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 7V9h2v3h3v2h-3v3h-2v-3H8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Add Line
 * @see {@link https://remixicon.com/icon/folder-add-line Remix Icon Docs}
 */
export { FolderAddLine }
