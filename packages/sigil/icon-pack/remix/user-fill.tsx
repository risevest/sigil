import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserFill = /* @__PURE__ */ memo(function UserFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6" />
    </Svg>
  )
})
/**
 * Remix Icon: User Fill
 * @see {@link https://remixicon.com/icon/user-fill Remix Icon Docs}
 */
export { UserFill }
