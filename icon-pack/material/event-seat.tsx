import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 5V12H9V5H15ZM15 3H9C7.9 3 7 3.9 7 5V14H17V5C17 3.9 16.1 3 15 3ZM22 10H19V13H22V10ZM5 10H2V13H5V10ZM20 15H4V21H6V17H18V21H20V15Z" />
    </Svg>
  )
}

Icon.displayName = 'EventSeat'

/**
 * Material Icon: Event Seat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:event_seat Material Icon Docs}
 */
export const EventSeat = memo(Icon)
