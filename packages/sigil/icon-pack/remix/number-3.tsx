import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Number3 = /* @__PURE__ */ memo(function Number3(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 2v1.362L12.81 9.55a6.501 6.501 0 1 1-7.116 8.028l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-6.505-4.03l-.228.122-.69-1.207L14.855 4 6.5 4V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Number 3
 * @see {@link https://remixicon.com/icon/number-3 Remix Icon Docs}
 */
export { Number3 }
