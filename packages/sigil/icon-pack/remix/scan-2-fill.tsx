import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Scan2Fill = /* @__PURE__ */ memo(function Scan2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.257 5.671 2.137 2.137a7 7 0 1 0 1.414-1.414L5.67 4.257A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329m3.571 3.572L12 13.414 13.414 12 9.243 7.828a5 5 0 1 1-1.414 1.414" />
    </Svg>
  )
})
/**
 * Remix Icon: Scan 2 Fill
 * @see {@link https://remixicon.com/icon/scan-2-fill Remix Icon Docs}
 */
export { Scan2Fill }
