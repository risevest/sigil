import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BluetoothLine = /* @__PURE__ */ memo(function BluetoothLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m14.312 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.414-1.415 5.778-5.778v-.97L5.22 5.737l1.414-1.415 4.364 4.364V2h2l5.657 5.657zm-1.314 1.515v5.657l2.828-2.829zm0-3.03 2.828-2.828-2.828-2.829z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bluetooth Line
 * @see {@link https://remixicon.com/icon/bluetooth-line Remix Icon Docs}
 */
export { BluetoothLine }
