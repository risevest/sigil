import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 16.5H21V18.5H3V16.5ZM19 11.5V12.5H5V11.5H19ZM21 9.5H3V14.5H21V9.5ZM3 5.5H21V7.5H3V5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CalendarViewDay'

/**
 * Material Icon: Calendar View Day
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:calendar_view_day Material Icon Docs}
 */
export const CalendarViewDay = memo(Icon)
