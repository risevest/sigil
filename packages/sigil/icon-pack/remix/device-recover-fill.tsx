import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeviceRecoverFill = /* @__PURE__ */ memo(function DeviceRecoverFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-7 5a5 5 0 1 0 .955 9.909L12 15a3 3 0 1 1 0-6c1.598 0 3 1.34 3 3h-2.5l2.128 4.254A5 5 0 0 0 12 7" />
    </Svg>
  )
})
/**
 * Remix Icon: Device Recover Fill
 * @see {@link https://remixicon.com/icon/device-recover-fill Remix Icon Docs}
 */
export { DeviceRecoverFill }
