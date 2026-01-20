import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HexagonFill = /* @__PURE__ */ memo(function HexagonFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Hexagon Fill
 * @see {@link https://remixicon.com/icon/hexagon-fill Remix Icon Docs}
 */
export { HexagonFill }
