import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserMinusFill = /* @__PURE__ */ memo(function UserMinusFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m11 5v2h-8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: User Minus Fill
 * @see {@link https://remixicon.com/icon/user-minus-fill Remix Icon Docs}
 */
export { UserMinusFill }
