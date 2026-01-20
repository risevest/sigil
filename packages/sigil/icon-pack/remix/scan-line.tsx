import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ScanLine = /* @__PURE__ */ memo(function ScanLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.671 4.257 13.414 12 12 13.414l-6.32-6.32a8 8 0 1 0 3.706-2.658L7.85 2.9A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.671-7.743" />
    </Svg>
  )
})
/**
 * Remix Icon: Scan Line
 * @see {@link https://remixicon.com/icon/scan-line Remix Icon Docs}
 */
export { ScanLine }
