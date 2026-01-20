import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Number7 = /* @__PURE__ */ memo(function Number7(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 2v1.5L10.763 22H8.574l8.013-18H6V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Number 7
 * @see {@link https://remixicon.com/icon/number-7 Remix Icon Docs}
 */
export { Number7 }
