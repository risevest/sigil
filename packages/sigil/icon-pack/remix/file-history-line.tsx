import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileHistoryLine = /* @__PURE__ */ memo(function FileHistoryLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 5v4h3v2h-5V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: File History Line
 * @see {@link https://remixicon.com/icon/file-history-line Remix Icon Docs}
 */
export { FileHistoryLine }
