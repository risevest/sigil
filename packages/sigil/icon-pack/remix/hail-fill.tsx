import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HailFill = /* @__PURE__ */ memo(function HailFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.995 17.794a4 4 0 0 0-5.085-3.644A4.001 4.001 0 0 0 6 15c0 1.08.428 2.059 1.122 2.778a8 8 0 1 1 9.335-10.68 5.5 5.5 0 0 1 2.537 10.696M10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Hail Fill
 * @see {@link https://remixicon.com/icon/hail-fill Remix Icon Docs}
 */
export { HailFill }
