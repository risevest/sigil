import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CrosshairFill = /* @__PURE__ */ memo(function CrosshairFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19.938 13A8.004 8.004 0 0 1 13 19.938V17h-2v2.938A8.004 8.004 0 0 1 4.062 13H7v-2H4.062A8.004 8.004 0 0 1 11 4.062V7h2V4.062A8.004 8.004 0 0 1 19.938 11H17v2zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Crosshair Fill
 * @see {@link https://remixicon.com/icon/crosshair-fill Remix Icon Docs}
 */
export { CrosshairFill }
