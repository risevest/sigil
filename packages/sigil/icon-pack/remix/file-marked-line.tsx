import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileMarkedLine = /* @__PURE__ */ memo(function FileMarkedLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 4H5v16h14V4h-5v9l-3.5-2L7 13z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Marked Line
 * @see {@link https://remixicon.com/icon/file-marked-line Remix Icon Docs}
 */
export { FileMarkedLine }
