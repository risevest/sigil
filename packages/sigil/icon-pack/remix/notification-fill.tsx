import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NotificationFill = /* @__PURE__ */ memo(function NotificationFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2M9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification Fill
 * @see {@link https://remixicon.com/icon/notification-fill Remix Icon Docs}
 */
export { NotificationFill }
