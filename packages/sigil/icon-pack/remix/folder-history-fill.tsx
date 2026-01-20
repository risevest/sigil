import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderHistoryFill = /* @__PURE__ */ memo(function FolderHistoryFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM13 9h-2v6h5v-2h-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder History Fill
 * @see {@link https://remixicon.com/icon/folder-history-fill Remix Icon Docs}
 */
export { FolderHistoryFill }
