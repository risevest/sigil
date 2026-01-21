import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalendarFill = /* @__PURE__ */ memo(function CalendarFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar Fill
 * @see {@link https://remixicon.com/icon/calendar-fill Remix Icon Docs}
 */
export { CalendarFill }
