import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031zm4.5 3h5a2.5 2.5 0 0 1-5 0" />
    </Svg>
  )
})
Icon.displayName = 'Notification2Line'
/**
 * Remix Icon: Notification 2 Line
 * @see {@link https://remixicon.com/icon/notification-2-line Remix Icon Docs}
 */
export const Notification2Line = Icon
