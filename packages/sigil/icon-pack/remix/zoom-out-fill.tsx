import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ZoomOutFill = /* @__PURE__ */ memo(function ZoomOutFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M7 10v2h8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Zoom Out Fill
 * @see {@link https://remixicon.com/icon/zoom-out-fill Remix Icon Docs}
 */
export { ZoomOutFill }
