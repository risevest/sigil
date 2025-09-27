import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 15h16V9H4zm7-6H6v4h5z" />
    </Svg>
  )
})
Icon.displayName = 'CalendarView'
/**
 * Remix Icon: Calendar View
 * @see {@link https://remixicon.com/icon/calendar-view Remix Icon Docs}
 */
export const CalendarView = Icon
