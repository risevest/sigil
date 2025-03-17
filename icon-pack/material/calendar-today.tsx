import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z" />
    </Svg>
  )
}

Icon.displayName = 'CalendarToday'

/**
 * Material Icon: Calendar Today
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:calendar_today Material Icon Docs}
 */
export const CalendarToday = memo(Icon)
