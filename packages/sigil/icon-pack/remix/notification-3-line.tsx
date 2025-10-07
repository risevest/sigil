import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0zm-2 0v-7a6 6 0 0 0-12 0v7zm-9 4h6v2H9z" />
    </Svg>
  )
})
Icon.displayName = 'Notification3Line'
/**
 * Remix Icon: Notification 3 Line
 * @see {@link https://remixicon.com/icon/notification-3-line Remix Icon Docs}
 */
export const Notification3Line = Icon
