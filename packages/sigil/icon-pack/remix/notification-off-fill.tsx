import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NotificationOffFill = /* @__PURE__ */ memo(function NotificationOffFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414zM20 15.786 7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification Off Fill
 * @see {@link https://remixicon.com/icon/notification-off-fill Remix Icon Docs}
 */
export { NotificationOffFill }
