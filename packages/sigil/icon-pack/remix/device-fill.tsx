import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeviceFill = /* @__PURE__ */ memo(function DeviceFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 6h-8a1 1 0 0 0-1 1v13H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-6 2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Device Fill
 * @see {@link https://remixicon.com/icon/device-fill Remix Icon Docs}
 */
export { DeviceFill }
