import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const NotificationSnoozeFill = /* @__PURE__ */ memo(function NotificationSnoozeFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-7 6v-2H9v2zM9 9V7h6v2.414L11.414 13H15v2H9v-2.414L12.586 9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification Snooze Fill
 * @see {@link https://remixicon.com/icon/notification-snooze-fill Remix Icon Docs}
 */
export { NotificationSnoozeFill }
