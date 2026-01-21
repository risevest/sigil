import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserFollowFill = /* @__PURE__ */ memo(function UserFollowFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 14.062V22H4a8 8 0 0 1 9-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m5.793 6.914 3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: User Follow Fill
 * @see {@link https://remixicon.com/icon/user-follow-fill Remix Icon Docs}
 */
export { UserFollowFill }
