import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalendarCheckLine = /* @__PURE__ */ memo(function CalendarCheckLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 9H4v9h16zm-4.964 1.136 1.414 1.414-4.95 4.95-3.536-3.536L9.38 12.55l2.121 2.122zM7 5H4v3h16V5h-3v1h-2V5H9v1H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar Check Line
 * @see {@link https://remixicon.com/icon/calendar-check-line Remix Icon Docs}
 */
export { CalendarCheckLine }
