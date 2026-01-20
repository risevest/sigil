import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserForbidFill = /* @__PURE__ */ memo(function UserForbidFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3 5a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708 4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-6 1q.126 0 .252.004A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H4a8 8 0 0 1 8-8" />
    </Svg>
  )
})
/**
 * Remix Icon: User Forbid Fill
 * @see {@link https://remixicon.com/icon/user-forbid-fill Remix Icon Docs}
 */
export { UserForbidFill }
