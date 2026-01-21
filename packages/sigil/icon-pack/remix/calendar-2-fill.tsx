import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Calendar2Fill = /* @__PURE__ */ memo(function Calendar2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm5 0h2v2h-2zm5 0h2v2h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calendar 2 Fill
 * @see {@link https://remixicon.com/icon/calendar-2-fill Remix Icon Docs}
 */
export { Calendar2Fill }
