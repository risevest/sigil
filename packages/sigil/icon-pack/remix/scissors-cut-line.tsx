import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ScissorsCutLine = /* @__PURE__ */ memo(function ScissorsCutLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.582l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554A4 4 0 1 1 10 5.997m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.317 1.415-1.414zM16 10.997h2v2h-2zm4 0h2v2h-2zm-14 0h2v2H6zm-4 0h2v2H2zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Scissors Cut Line
 * @see {@link https://remixicon.com/icon/scissors-cut-line Remix Icon Docs}
 */
export { ScissorsCutLine }
