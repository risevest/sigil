import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM8 13v2H6v-2zm5 0v2h-2v-2zm5 0v2h-2v-2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
    </Svg>
  )
})
Icon.displayName = 'Calendar2Line'
/**
 * Remix Icon: Calendar 2 Line
 * @see {@link https://remixicon.com/icon/calendar-2-line Remix Icon Docs}
 */
export const Calendar2Line = Icon
