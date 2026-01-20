import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EraserFill = /* @__PURE__ */ memo(function EraserFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 18.997h7v2h-9l-3.998.002-6.487-6.488a1 1 0 0 1 0-1.414L12.12 2.491a1 1 0 0 1 1.414 0l7.779 7.778a1 1 0 0 1 0 1.414zm1.657-4.486 3.535-3.535-6.364-6.364-3.535 3.535z" />
    </Svg>
  )
})
/**
 * Remix Icon: Eraser Fill
 * @see {@link https://remixicon.com/icon/eraser-fill Remix Icon Docs}
 */
export { EraserFill }
