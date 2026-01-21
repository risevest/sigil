import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VipCrown2Fill = /* @__PURE__ */ memo(function VipCrown2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.806 5.2 7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86 4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15A1 1 0 0 1 2.806 5.2m9.2 9.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Vip Crown 2 Fill
 * @see {@link https://remixicon.com/icon/vip-crown-2-fill Remix Icon Docs}
 */
export { VipCrown2Fill }
