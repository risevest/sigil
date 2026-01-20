import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ParentFill = /* @__PURE__ */ memo(function ParentFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5M7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5" />
    </Svg>
  )
})
/**
 * Remix Icon: Parent Fill
 * @see {@link https://remixicon.com/icon/parent-fill Remix Icon Docs}
 */
export { ParentFill }
