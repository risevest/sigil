import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileCopyLine = /* @__PURE__ */ memo(function FileCopyLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8 5 20h10V8zM9 6h8v10h2V4H9z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Copy Line
 * @see {@link https://remixicon.com/icon/file-copy-line Remix Icon Docs}
 */
export { FileCopyLine }
