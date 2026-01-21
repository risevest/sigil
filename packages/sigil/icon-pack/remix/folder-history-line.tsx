import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderHistoryLine = /* @__PURE__ */ memo(function FolderHistoryLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM13 9v4h3v2h-5V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder History Line
 * @see {@link https://remixicon.com/icon/folder-history-line Remix Icon Docs}
 */
export { FolderHistoryLine }
