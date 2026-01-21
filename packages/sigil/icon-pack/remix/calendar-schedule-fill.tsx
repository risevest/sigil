import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalendarScheduleFill = /* @__PURE__ */ memo(function CalendarScheduleFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 1v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7.755A8 8 0 0 1 22 9.755V4a1 1 0 0 0-1-1h-4V1h-2v2H9V1zm16 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-7-4v4.414l2.293 2.293 1.414-1.414L18 15.586V12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar Schedule Fill
 * @see {@link https://remixicon.com/icon/calendar-schedule-fill Remix Icon Docs}
 */
export { CalendarScheduleFill }
