import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SubtractFill = /* @__PURE__ */ memo(function SubtractFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 11H5v2h14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Subtract Fill
 * @see {@link https://remixicon.com/icon/subtract-fill Remix Icon Docs}
 */
export { SubtractFill }
