import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 3V1h2v2h6V1h2v2h4a1 1 0 0 1 1 1v5h-2V5h-3v2h-2V5H9v2H7V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0m5-3v3.414l2.293 2.293 1.414-1.414L18 15.586V13z" />
    </Svg>
  )
})
Icon.displayName = 'CalendarScheduleLine'
/**
 * Remix Icon: Calendar Schedule Line
 * @see {@link https://remixicon.com/icon/calendar-schedule-line Remix Icon Docs}
 */
export const CalendarScheduleLine = Icon
