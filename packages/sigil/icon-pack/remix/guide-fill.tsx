import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GuideFill = /* @__PURE__ */ memo(function GuideFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1" />
    </Svg>
  )
})
/**
 * Remix Icon: Guide Fill
 * @see {@link https://remixicon.com/icon/guide-fill Remix Icon Docs}
 */
export { GuideFill }
