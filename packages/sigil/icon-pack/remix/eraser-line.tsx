import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EraserLine = /* @__PURE__ */ memo(function EraserLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m8.586 8.854-4.95 4.95L8.83 19l1.17-.001v-.001h1.171l3.779-3.779zM10 7.44l6.364 6.364 2.828-2.828-6.364-6.364zm4 11.557h7v2h-9l-3.998.002-6.487-6.488a1 1 0 0 1 0-1.414L12.12 2.491a1 1 0 0 1 1.414 0l7.779 7.778a1 1 0 0 1 0 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Eraser Line
 * @see {@link https://remixicon.com/icon/eraser-line Remix Icon Docs}
 */
export { EraserLine }
