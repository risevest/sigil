import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.341 4A6 6 0 0 0 21 11.659V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM19 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
    </Svg>
  )
})
Icon.displayName = 'NotificationBadgeFill'
/**
 * Remix Icon: Notification Badge Fill
 * @see {@link https://remixicon.com/icon/notification-badge-fill Remix Icon Docs}
 */
export const NotificationBadgeFill = Icon
