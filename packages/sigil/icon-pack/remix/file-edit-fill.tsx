import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileEditFill = /* @__PURE__ */ memo(function FileEditFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 15.243v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.992V9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v3.765l-8.999 9-.006 4.238 4.246.006zm.778-6.435 1.414 1.414L15.414 18l-1.416-.002.002-1.412zM3 7l5-4.997V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Edit Fill
 * @see {@link https://remixicon.com/icon/file-edit-fill Remix Icon Docs}
 */
export { FileEditFill }
