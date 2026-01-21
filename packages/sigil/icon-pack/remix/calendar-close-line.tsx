import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalendarCloseLine = /* @__PURE__ */ memo(function CalendarCloseLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zm-5 7h16v9H4zm0-5h3v1h2V5h6v1h2V5h3v3H4zm5.879 5.964L12 13.086l2.121-2.122 1.415 1.415-2.122 2.121 2.121 2.121-1.414 1.414L12 15.915l-2.121 2.12-1.415-1.414 2.122-2.12-2.122-2.122z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar Close Line
 * @see {@link https://remixicon.com/icon/calendar-close-line Remix Icon Docs}
 */
export { CalendarCloseLine }
