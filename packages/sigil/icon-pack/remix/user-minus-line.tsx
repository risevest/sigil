import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserMinusLine = /* @__PURE__ */ memo(function UserMinusLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m11 7v2h-8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: User Minus Line
 * @see {@link https://remixicon.com/icon/user-minus-line Remix Icon Docs}
 */
export { UserMinusLine }
