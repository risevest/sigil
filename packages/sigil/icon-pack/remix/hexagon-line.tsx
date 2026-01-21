import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HexagonLine = /* @__PURE__ */ memo(function HexagonLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Hexagon Line
 * @see {@link https://remixicon.com/icon/hexagon-line Remix Icon Docs}
 */
export { HexagonLine }
