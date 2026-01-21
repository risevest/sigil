import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalendarTodoLine = /* @__PURE__ */ memo(function CalendarTodoLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM8 14v2H6v-2zm10 0v2h-8v-2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar Todo Line
 * @see {@link https://remixicon.com/icon/calendar-todo-line Remix Icon Docs}
 */
export { CalendarTodoLine }
