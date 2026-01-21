import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PantoneFill = /* @__PURE__ */ memo(function PantoneFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4 18.922-1.35-.545a1 1 0 0 1-.552-1.302L4 12.367zM8.86 21H7a1 1 0 0 1-1-1v-6.078zM6.022 5.968l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L5.47 7.27a1 1 0 0 1 .553-1.302M9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Pantone Fill
 * @see {@link https://remixicon.com/icon/pantone-fill Remix Icon Docs}
 */
export { PantoneFill }
