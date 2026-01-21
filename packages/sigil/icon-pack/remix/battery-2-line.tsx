import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Battery2Line = /* @__PURE__ */ memo(function Battery2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 6H7v14h10V6h-4V4h-2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Battery 2 Line
 * @see {@link https://remixicon.com/icon/battery-2-line Remix Icon Docs}
 */
export { Battery2Line }
